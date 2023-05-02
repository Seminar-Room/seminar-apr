import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import LoginPage from './pages/login.jsx'
import Dashboard from './pages/Dashboard.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingupPage from './pages/signup.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/signup" element={<SingupPage/>}/>
      </Routes>
    </Router>
  </React.StrictMode>,
)
