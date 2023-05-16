import './App.css'
import Benifits from './components/benefits/Benifits'
import ContactUs from './components/contact-us/ContactUs'
import Landing from './components/landing/Landing'
import Meetteam from './components/meet-the-team/Meetteam'
import OurOfferings from './components/our-offerings/OurOfferings'
import Session from './components/session/Sessions'
import Testimony from './components/testimony/Testimony'
import Whorwe from './components/who-are-we/Whorwe'


function App() {
  
  return (
    <>
     <Landing/>
     <Whorwe/>
     <OurOfferings/>
     <Benifits/>
     <Session/>
     <Meetteam/>
     <Testimony/>
     <ContactUs/>
    </>
  )
}

export default App
