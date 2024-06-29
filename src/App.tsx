import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import './App.css'
import Dashboard from "./pages/Dashboard"
import AddProduct from "./pages/AddProduct"
import EditProduct from "./pages/EditProduct"

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={ <Navigate to="/product/list" replace/> } />
          <Route path="/product/list" Component= {Dashboard} />
          <Route path="/product/add" Component= {AddProduct} />
          <Route path="/product/:id/edit" Component= {EditProduct} />
        </Routes>
      </Router>
  )
}

export default App
