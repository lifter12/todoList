"use client"

import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("");
  const [maintask, setmaintask] = useState([])
  const submitHandler = (e)=> {
    e.preventDefault()
    setmaintask([...maintask,{title,desc}])
    // console.log(maintask);
    settitle("");
    setdesc("");

  }
const deletehandler = (i)=>{
let copytask =[...maintask]
copytask.splice(i,1)
setmaintask(copytask)
}

 let rendertask = <h2> No task Available </h2>

  if(maintask.length>0){
    rendertask = maintask.map((t, i) => {
      return (
        <li key={i} className='flex items-center justify-between mb-8'>
          <div className="flex items-center justify-between mb-5  w-2/3 ">
            <h5 className="text-2xl font-semibold">{t.title}</h5>
            <h6 className="text-xl font-semibold">{t.desc}</h6>
          </div>
          <button  
          onClick={()=>{
            deletehandler(i)
          }}
          
          className='bg-red-400 px-4 py-2 rounded font-bold'> Delete </button>
        </li>
      );
    });
  }
  return (
    
    <>
      <h1 className="bg-black text-white px-5 text-5xl font-bold py-2  text-center">
        
        My Todo List
      </h1>

      <form  onSubmit={ submitHandler}>
        <input
          type="text"
          className="text-2xl border-zinc-500 border-4 m-4 px-4 py-2"
          placeholder="Enter task here"
          value={title}
          onChange={(e)=>{
            settitle(e.target.value);
          }}
        >

        </input>
        <input
          type="text"
          className="text-2xl border-zinc-500 border-4 m-4 px-4 py-2"
          placeholder="Enter Description here"
          value={desc}
          onChange={(e)=>{
            setdesc(e.target.value);

          }}
        >

        </input>
        <button className=' text-white rounded  bg-black  border-4 border-zinc-500 px-4 py-1 text-2xl m-5'  >  
        Add task


        </button>

      </form>
      <hr/>
      <div className='p-8 bg-slate-400'>
        <ul>
          {rendertask}
        </ul>

      </div>
    </>
  );
}

export default page
