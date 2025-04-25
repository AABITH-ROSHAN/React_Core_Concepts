import React from 'react'

export default function Map() {


    let arr=[
        {
            name:"Aabith",
            dept:"CSE"
        },{
            name:"Gokul",
            dept:"CSE"
        }
    ];

  return (
    <div>
      <ul>
        {arr.map((item,index)=>(
            <li key={index}>Name:{item.name} dept:{item.dept}</li>
        ))}
      </ul>
    </div>
  )
}
