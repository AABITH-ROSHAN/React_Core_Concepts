import React from 'react'
import StudentAdd from './StudentAdd'
import { Provider } from 'react-redux'
import { store } from './Store'
import StudentView from './StudentView'

function App() {
 

  return (
    
      <Provider store={store}>
      <>
        <StudentAdd />
        <StudentView />
      </>
      </Provider>
  )
}

export default App
