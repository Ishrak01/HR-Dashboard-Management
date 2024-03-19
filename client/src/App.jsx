import React from 'react'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import ReduxProvider from './Redux/ReduxProvider'
import Application from './component/Application'
import CreateApplicant from './component/CreateApplicant'
import Dashboard from './component/Dashboard'
import Navbar from './component/Navbar'

const App = () => {
  return (


    <BrowserRouter>
      <Toaster position='top-right' />
      <ReduxProvider>


        <Navbar />
        <Routes>


          <Route path='/' element={<Dashboard />} />
          <Route path='/application' element={<Application />} />
          <Route path='/createApplicant' element={<CreateApplicant />} />



        </Routes>

      </ReduxProvider>


    </BrowserRouter >

  )
}

export default App