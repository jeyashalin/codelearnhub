
import { Pinecone } from "@pinecone-database/pinecone";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY as string);

const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY as string,
});

const pineconeIndex = process.env.PINECONE_INDEX as string;
const vectorSize = Number(process.env.VECTOR_NUMBER);

const queryEmbeddings = async (
  queryText: string,
  pineconeNamespace: string
) => {
  const model = genAI.getGenerativeModel({ model: "text-embedding-004" });
  const result = await model.embedContent(queryText);
  const queryVector = result.embedding.values;

  const index = pc.index(pineconeIndex);

  const queryResponse = await index.namespace(pineconeNamespace).query({
    topK: vectorSize,
    vector: queryVector,
    includeMetadata: true,
  });

  if (queryResponse.matches.length === 0) {
    return [];
  }

  return queryResponse;
};

const combineText = async (queryResponse: any, length: number) => {
  const combinedText = queryResponse.matches
    .slice(0, length)
    .map((match: any) => match.metadata.text)
    .join(" ");

  return combinedText;
};

const getData = async (queryText: string, namespace: string) => {
  const response = await queryEmbeddings(queryText, namespace);
  if (Array.isArray(response) && response.length === 0) {
    return [];
  }

  const combinedText = await combineText(response, vectorSize);

  return combinedText;
};

export { getData };
