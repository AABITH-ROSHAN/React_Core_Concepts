import React, { useEffect, useState } from 'react'

function FetchapiMethod() {

    const[data,setdata]=useState([])

    // const getData=()=>{
    //     fetch("http://localhost:3001/students")
    //     .then((res)=>res.json())
    //     .then((d)=>setdata(d))
    // }

    // const getData=async()=>{
    //     const get=await fetch("http://localhost:3001/students")
    //     const a =await get.json();
    //     setdata(a);
    // }
    const getData=async()=>{
        await fetch("http://localhost:3001/students/1",{
            method:'PATCH',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                id: 1,
                name: "Rashid",
                dept: "CSE",
                email: "rashid@example.com"
            })
        });
        const getdata=await fetch("http://localhost:3001/students")
        const a =await getdata.json();
        setdata(a);
    }

    useEffect(()=>{
        getData();
    },[])

  return (
    <div>
      <ul>
        {data.map((item,index)=>(
            <li key={index}>
                <p>Id:{item.id}</p>
                <p>Name:{item.name}</p>
            </li>
        ))}
      </ul>
      
    </div>
  )
}

export default FetchapiMethod
