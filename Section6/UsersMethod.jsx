import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
function UsersMethod() {

    const [data,setdata]=useState([]);
    const[searchparams,setsearchparams]=useSearchParams("");

    const b=searchparams.get("search")  || "";

    const navigate=useNavigate();

    const getData=async()=>{
        try{
            const d=await axios.get("http://localhost:3001/students")
            setdata(d.data);
        }
        catch(error){
            console.log("Error :",error.message);
        }
    }

    useEffect(()=>{
        getData()
    },[])

    const HandleSearch=()=>{
        return searchparams ? 
        (data.filter((item)=>(
            item.id.toLowerCase().includes(b.toLowerCase()) ||
            item.name.toLowerCase().includes(b.toLowerCase())
        )))
        :
        (data)
    }


  return (
    <div>
        <input type='text' 
        placeholder='Search' 
        value={b}
        onChange={(e)=>setsearchparams({search:e.target.value})}
        />
      <ul>
      {HandleSearch().map((item,index)=>(
            <li key={index}>
            <Link to={`/${item.id}`} >{item.id}</Link>
            <p>{item.name}</p>
            <p>{item.dept}</p>
        </li>
        
      ))}
      </ul>
      <button onClick={()=>navigate("/")}>Go to Home Page </button>
    </div>
  )
}

export default UsersMethod
