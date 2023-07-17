import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Createcourse from './components/Createcourse'
import Viewcourse from './components/Viewcourse'
import Updatecourse from './components/Updatecourse'
import Content from './components/Content'

function App() {
  return (
    <div>
      <Content/>
      <Router>
        <Routes>
          <Route path='/' element={<Createcourse/>} />
          <Route path='/viewcourse' element={<Viewcourse/>} />
          <Route path='/updatecourse/:id' element={<Updatecourse/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App