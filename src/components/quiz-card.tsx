import React from 'react'
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@/components/ui/dialog";

export default function QuizCard({selectedPdf}:any) {
  return (
    <div className='items-center flex justify-center'>
        <Dialog>
            <DialogTrigger>
            <div
              className=" bg-blue-500 justify-center px-2 py-1 text-xl font-semibold transition-all border-2 rounded-xl border-black border-b-2 border-r-2 dark:border-white hover:-translate-y-[2px] hover:bg-slate-500"
              >
                TAKE AI Quizz 
            </div>
            </DialogTrigger>
            <DialogContent className=" bg-white p-6 rounded-xl border border-gray-200 shadow-lg">
                  
                  <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4 w-auto">
                    AI generated quiz on {selectedPdf} will be implemented later
                  </DialogTitle>
            </DialogContent>
        </Dialog>
     </div>
  )
}
