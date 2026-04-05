import react from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Home } from './Home'
import 'bootstrap/dist/css/bootstrap.min.css'
import Create from './Create'
import Read from './Read'
import Edit from './Edit'

function App() {
  
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/create' element={<Create />} />
      <Route path='/read/:id' element={<Read/>} />
      <Route path='/edit/:id' element={<Edit/>} />
    </Routes>
   </Router>
  )
}

export default App
