import React, { useEffect, useState } from 'react'
import axios from "axios"
function AxiosMethod() {

    const[data,setdata]=useState([])


    const getData=async()=>{
        try{
            // const d=await axios.get("http://localhost:3001/students")
            // setdata(d.data);
            // await axios.put("http://localhost:3001/students/4",{
            //     id:4,
            //     name:"Gokula",
            //     dept:"CSE",
            //     email:"Gokul@gmail.com"

            // })
            await axios.delete("http://localhost:3001/students/4")
            
            const d=await axios.get("http://localhost:3001/students")
            setdata(d.data);
        }
        catch(error){
            console.log("Error:",error)
        }
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

export default AxiosMethod
