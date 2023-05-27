import { useEffect, useState } from 'react'
import './App.css'
import { mycontext } from './context'
import CocktailsNav from './components/cocktailsNav'
import CocktailBody from './components/cocktailbody'
import Loading from './components/Loading'
import Home from './Pages/Home'
import About from './Pages/About'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import DetailPage from './Pages/DetailPage'
function App() {
  const [cocktailsArray,setcocktailsArray] = useState([])
  const [newArray,setnewarray]= useState([])
  const [loading,setloading] = useState(true)
  useEffect(()=>{
      fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
      .then(res=>res.json())
      .then(data=>{
        setcocktailsArray(data.drinks)
        setloading(!loading)
      })
  },[])
  return (
    <>
      <mycontext.Provider value={{cocktailsArray,loading,newArray,setnewarray}}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />}/>
                  <Route path='detailpage'element={<DetailPage />}/>
                  <Route path='about' element={<About />}/>
              </Routes>
          </BrowserRouter>
      </mycontext.Provider>
    </>
  )
}

export default App
