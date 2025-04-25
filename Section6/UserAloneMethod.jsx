import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function UserAloneMethod() {
    const [data,setdata]=useState([]);

    const {id}=useParams();

    const getData=async()=>{
        try{
            const d=await axios.get(`http://localhost:3001/students/${id}`)
            setdata(d.data);
        }
        catch(error){
            console.log("Error :",error.message);
        }
    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
      <ul>
        <li>
            <p>{data.id}</p>
            <p>{data.name}</p>
            <p>{data.dept}</p>
        </li>
      </ul>
    </div>
  )
}

export default UserAloneMethod
