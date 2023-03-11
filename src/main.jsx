import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import './index.css'
import Contact from './pages/Contact'
import About from './pages/About'
import PracticeAreas from './pages/PracticeAreas'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={ <Contact/> } />
                <Route path="/about" element={<About />} />
                <Route path="/practices" element={<PracticeAreas />} />
            </Routes>
        </Router>
    </React.StrictMode>
)
