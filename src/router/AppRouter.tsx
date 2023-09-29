import AboutPage from "../pages/AboutPage"
import ContentPage from "../pages/ContentPage"
import HomaPage from "../pages/HomaPage"
import Navbar from "./Navbar"
import {Routes,Route} from 'react-router-dom'

const AppRouter = () => {
  return (
    <>
        <Navbar/>
        <Routes>
            <Route path="/*" element={<HomaPage/>}></Route>
            <Route path="/home" element={<HomaPage/>}></Route>
            <Route path="/content" element={<ContentPage/>}></Route>
            <Route path="/about" element={<AboutPage/>}></Route>
        </Routes>
    </>
  )
}

export default AppRouter