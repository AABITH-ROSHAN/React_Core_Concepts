import React from 'react'
import { BrowserRouter,Routes,Route, Navigate } from 'react-router-dom'
import NavigateMethod1 from './NavigateMethod1'
import NavigateMethod2 from './NavigateMethod2'
import ErrorMethod from './ErrorMethod'
import LoginMethod from './LoginMethod'
import Navigatemethod3 from './Navigate method3'
import UsersMethod from './UsersMethod'
import UserAloneMethod from './UserAloneMethod'
function NavigateMethod() {
    const login =true;

// let route;
//     if(login){
//         route=
//         (<>
//         <Route path="/" element={<NavigateMethod1 />} />
//         <Route path="/contact" element={<NavigateMethod2 />} />
//         <Route path="*" element={<ErrorMethod />} />
//         <Route path="/login" element={<LoginMethod />} />
//         </>)
//     }
//     else{
//         route=
//         (<>
//         <Route path="/login" element={<LoginMethod />} />
//         <Route path="*" element={<Navigate to="/login"/>} />
//         </>)
//     }

  return (
    <BrowserRouter>
    <Navigatemethod3 />
      <Routes>
        {login ? (
          <>
            <Route path="/" element={<NavigateMethod1 />} />
            <Route path="/contact" element={<NavigateMethod2 />} />
            <Route path="*" element={<ErrorMethod />} />
            <Route path="/user" element={<UsersMethod />} />
            <Route path="/:id" element={<UserAloneMethod />} />
            <Route path="/login" element={<LoginMethod />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<LoginMethod />} />
            <Route path="*" element={<Navigate to="/login"/>} />
          </>
        )}
        {/* {route} */}
      </Routes>
    </BrowserRouter>

  )
}

export default NavigateMethod
