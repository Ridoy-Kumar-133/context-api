'use client'
import Image from "next/image";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export default function Home() {

  const data = useContext(UserContext);
  const {count, setCount} = data;

  const handein = () =>{
    setCount(count+1);
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
          <h1>This is Home page</h1><br></br>
        <div>
          
          <div className="flex  gap-15">
            <button className="btn btn-success">{count}</button>

          <button 
          onClick={handein}
          className="btn btn-success">InCrease</button>
          </div>

        </div>
       
      </main>
    </div>
  );
}
