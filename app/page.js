'use client'
import React, { useState } from 'react'

const page = () => {

  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask, {title, desc}])
    settitle("")
    setdesc("")
  }

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1)
    setmainTask(copyTask)
  }

  let renderTask = <h2 className="text-center text-l font-medium text-white">No Task Available</h2>
  if(mainTask.length>0){
    renderTask = mainTask.map((t, i) =>{
      return(
        <li key={i}>
          <div className='flex justify-between my-4'>
          <h5 className='text-xl font-medium text-white'>{t.title}</h5>
          <h5 className='text-xl font-medium text-white'>{t.desc}</h5>
          <div className=' flex justify-between'>
          <button className='text-white bg-pink-600 px-4 py-2 font-bold rounded mx-2'>Edit</button>
          <button 
          onClick={
            ()=>{
              {deleteHandler(i)}
            }
          }
          className='bg-red-700 text-white px-5 py-2 font-bold rounded mx-2'>Delete</button>
          <button className='text-white bg-green-600 px-4 py-2 font-bold rounded mx-2'>Complete</button>
          </div>
          </div>
        </li>
      )
    })
  }

  return (
    <>
    <h1 className='text-center text-3xl p-5 font-semibold bg-emerald-600 text-white'>
      ToDo List</h1>
      <form onSubmit={submitHandler}>
        <div className='text-center'>
        <input type='text'className='text-xl border-black border-4 m-5 px-4 py-2 text-xl rounded'
        placeholder='Enter Your Task Here' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}       
        />
        <input type='text'className='text-xl border-black border-4 m-5 px-4 py-2 text-xl rounded'
        placeholder='Enter Description Here' 
        value={desc}
        onChange={(e)=>{
          setdesc(e.target.value)
        }}       
        />
        <button className='text-white bg-slate-700 px-6 py-2 text-l font-semibold rounded m-5'>
          Add Task
          </button>
          </div>
      </form>
      <hr />
      <div className='p-4 bg-cyan-500'>
        <ul>
          {renderTask}
        </ul>
      </div>
    </>
  )
}

export default page



