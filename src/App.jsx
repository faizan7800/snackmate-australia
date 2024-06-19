import './App.css'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound'
import VegSamosa from './components/VegSamosa'
import Header from './components/Header'
import Footer from './components/Footer'
import VegRice from './components/VegRice'
import VegPuff from './components/VegPuff'
function App() {

 
  return (
  <>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/veg-samosa' element={<VegSamosa/>}/>
    <Route path='/veg-rice' element={<VegRice/>}/>
    <Route path='/veg-puff' element={<VegPuff/>}/>
    <Route path='https://snackmate.com.au/veg-rice' element={<VegRice/>}/>
    <Route path='https://snackmate.com.au/veg-samosa' element={<VegSamosa/>}/>
    <Route path='https://snackmate.com.au/veg-puff' element={<VegPuff/>}/>
    
    <Route path='*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
  </>
  )
}

export default App
