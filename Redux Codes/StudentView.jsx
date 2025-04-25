import { useSelector } from 'react-redux'
import { deleteStudent } from './StudentSlice'
import { useDispatch } from 'react-redux'
import { editStudent } from './StudentSlice'
function StudentView() {


  const data=useSelector((s)=>s.student)
  const dispatch=useDispatch();

  const HandleDelete=(index)=>{
    dispatch(deleteStudent(index))
  }
  const HandleEdit=(index)=>{
    const editedName=prompt("Name :",data[index])
    dispatch(editStudent({index,editedName}))
  }

  return (
    <div>
      <h3>The Students List</h3>
      <ul style={{listStyle:"none"}}>
        {
            data.map((item,index)=>(
                <li key={index}>{item}<button onClick={()=>HandleEdit(index)}>Edit</button><button onClick={()=>HandleDelete(index)}>Delete</button></li>
            ))
        }
      </ul>
    </div>
  )
}

export default StudentView
