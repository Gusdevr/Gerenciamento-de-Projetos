import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./src/pages/Home"
import Login from "./src/pages/Login"
import Register from "./src/pages/Register"
import Panel from "./src/pages/Panel"
import UpdateTarefa from "./src/pages/UpdateTarefa"
import PainelProjetos from "./src/pages/PainelProjetos"

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/login' element={<Login />} />
                <Route path='/cadastro' element={<Register />} />
                <Route path='/painel' element={<Panel />} />
                <Route path='/editar' element={<UpdateTarefa />} />
                <Route path='/painelprojetos' element={<PainelProjetos />} />

    
            </Routes>
        </BrowserRouter>
    )
}

export default Router