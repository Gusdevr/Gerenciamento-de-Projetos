import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./src/pages/Home"
import Login from "./src/pages/Login"
import Register from "./src/pages/Register"
import Panel from "./src/pages/Panel"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/painel' element={<Panel />} />
    
            </Routes>
        </BrowserRouter>
    )
}

export default Router