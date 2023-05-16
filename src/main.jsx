import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import VerifyUser from './components/auth/VerifyUser.jsx'
import Dashboard from './components/dashboard/Dashboard.jsx'
import Feedback from './components/feedback/Feedback.jsx'
import { SessionProvider } from './context/session-context.jsx';
import SessionStream from './pages/SessionStream.jsx';
import { MessageProvider } from './context/message-context.jsx';
import { UserProvider } from './context/user-context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Router>
      <UserProvider>
        <MessageProvider>
          <SessionProvider>
              <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<VerifyUser/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/session/:id" element={<SessionStream/>}/>
                <Route path="/feedback/:id" element={<Feedback/>}/>
              </Routes>
            </SessionProvider>
        </MessageProvider>
      </UserProvider>
    </Router>
    
  </React.StrictMode>,
)
