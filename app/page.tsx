"use client";
import { Console } from "console";
import { headers } from "next/dist/client/components/headers";

export default function Funktion() {
  const randomizer= async(selection: String) =>{
      let rnumber: number = Math.floor(Math.random()*3);
      let enemyselection: String = "";
      switch(rnumber){
        case 0:
          enemyselection = "rock";
          break;
        case 1:
          enemyselection = "paper";
          break;
        case 2:
          enemyselection = "scissor";
          break;
      }
    
    result(selection, enemyselection);
  }

    const result = async(selection: String, enemyselection: String) =>{
    if(selection == enemyselection){
      console.log("Draw");
  }
  else if(selection == "rock" && enemyselection == "paper" || selection == "paper" && enemyselection == "scissor" || selection == "scissor" && enemyselection == "rock"){
    console.log("You lose");
  }
  else{
    console.log("You win");
  }
}

  

  return (
    <> 
      <header className="text-center text-white text-6xl">ROCK PAPER SCISSORS</header>

      
      <div className="flex items-center justify-center h-screen flex-col">
        <button onClick={(e:any) =>randomizer("rock")} id="rock" className="text-white bg-gray-500 border-2 border-green-600 mb-4 h-8 px-10">Rock</button>

        <div className="flex justify-between">
          <button onClick={(e:any) =>randomizer("paper")} id="paper" className="text-white bg-gray-500 border-2 border-green-600 mr-2 h-8 px-10">Paper</button>
          <button onClick={(e:any) =>randomizer("scissor")} id="scissor" className="text-white bg-gray-500 border-2 border-green-600 ml-2 h-8 px-10">Scissor</button>
        </div>
      
        <div className="bg-gray-200 p-4 mt-4">
          <span>Result goes here</span>
        </div>
        
        
      </div>
    </>
  );
}