"use client"
import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Update this import to the actual path of your ShadCN Button component
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Settings } from "lucide-react";

export function DashHeader( { folders, selectedFolder, handleFolderClick, levels, selectedLevel, handleLevelClick }: any) {
  const { user } = useUser();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleLevelSelection = (level: string) => {
    handleLevelClick(level);  
    setIsDialogOpen(false);   
  };

  return (
    <header className="fixed inset-x-0 top-0 z-10 bg-white dark:bg-gray-950 h-auto border-b border-zinc-300 py-2">
      <div className="container flex items-center justify-between h-full px-4 mx-auto max-w-7xl">
        
        <Link href="/" className="flex items-center gap-2">
          <span className="px-2 py-1 text-xl font-bold transition-all border-2 rounded-lg border-black border-b-4 border-r-4 dark:border-white hover:-translate-y-[2px]">
            Dashboard
          </span>
        </Link>
        <p className="font-bold text-center justify-between text-xl">CLICK THE SETTINGS BUTTON TO CUSTOMIZE LEARNING PATH</p>

        <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-4">
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant="default">Sign In</Button>
            </SignInButton>
          </SignedOut>

          <SignedIn>
            <div className="flex items-center gap-2">
              {user?.fullName && (
                <span className="text-xl font-semibold">
                  {user.fullName}
                </span>
              )}
              <UserButton
                appearance={{
                  elements: {
                    rootBox: "hover:shadow-lg transition-shadow",
                  },
                }}
              />
            </div>
          </SignedIn>
          </div>
        <div>
          {/*select button */}
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger>
                  <div
                    className="px-2 py-1 text-xl font-bold transition-all border-2 rounded-lg border-black border-b-2 border-r-2 dark:border-white hover:-translate-y-[2px]"
                    onClick={() => setIsDialogOpen(true)}
                  >
                    <Settings/>
                  </div>
              </DialogTrigger>

              <DialogContent className="sm:w-[80%] md:w-[50%] lg:w-[30%] bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                  
                  <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4">
                    Choose Programming Language
                  </DialogTitle>

                  <div className="flex space-x-4 mb-6 flex-wrap">
                    {folders.map((folder: any) => (
                      <button
                        key={folder}
                        onClick={() => handleFolderClick(folder)}
                        className={`px-6 py-3 rounded-md text-white transition-all duration-300 ease-in-out transform ${
                          folder === 'python'
                            ? 'bg-green-500 hover:bg-green-600'
                            : folder === 'java'
                            ? 'bg-blue-500 hover:bg-blue-600'
                            : 'bg-red-500 hover:bg-red-600'
                        } ${selectedFolder === folder ? 'ring-4 ring-offset-2 ring-gray-300 scale-105' : ''}`}
                        aria-label={`Select ${folder.charAt(0).toUpperCase() + folder.slice(1)} folder`}
                      >
                        {folder.charAt(0).toUpperCase() + folder.slice(1)}
                      </button>
                    ))}
                  </div>

                  {selectedFolder && (
                    <div>
                      <p className="className=text-2xl font-semibold text-gray-800 mb-4">
                        Choose your Level of Dufficulty 
                      </p>
                      <div className="flex space-x-4 mt-4 animate-fade-in">
                        {levels.map((level: any, index: any) => (
                          <button
                            key={level}
                            onClick={() => handleLevelSelection(level)}
                            className={`px-6 py-3 rounded-md text-white transition-all duration-300 ease-in-out transform ${
                              index === 0
                                ? 'bg-yellow-500 hover:bg-yellow-600'
                                : index === 1
                                ? 'bg-orange-500 hover:bg-orange-600'
                                : 'bg-purple-500 hover:bg-purple-600'
                            } ${selectedLevel === level ? 'ring-4 ring-offset-2 ring-gray-300 scale-105' : ''}`}
                            aria-label={`Select ${level} level`}
                          >
                            {level}
                          </button>
                        ))}
                      </div>

                      {selectedLevel && (
                        <div className="mt-4 text-lg text-gray-600">
                          <p>Select a PDF from the list below.</p>
                        </div>
                      )}
                    </div>
                  )}
              </DialogContent>
          </Dialog>
        </div>
        </div>
    

      </div>
    </header>
  );
}
