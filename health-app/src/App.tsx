import LoginPage from "./AuthPages/LoginPage/LoginPage"
import RegisterPage from "./AuthPages/RegisterPage/RegisterPage"
import { Routes , Route } from "react-router-dom"
const App = () => {
  return (
    <div className="bg-slate-900">
      <Routes>
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      
    </div>
  )
}

export default App