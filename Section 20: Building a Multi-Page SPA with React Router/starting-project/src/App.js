import { Route, Routes, Navigate } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Products from './pages/Products'
import MainHeader from './components/MainHeader'
import ProductDetail from './pages/ProductDetail'

function App () {
  return (
    <div>
      <MainHeader/>
      <main>
        <Routes>
          <Route path="/" exact element={<Navigate to="/welcome"/>}/>
          <Route path="welcome" element={<Welcome/>}/>
          <Route path="products">
            <Route path="" element={<Products/>}/>
            <Route path=":id" element={<ProductDetail/>}/>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
