import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import { Routes, Route} from "react-router-dom";
import Home from "./pages/Home.js";
import ProviderInfo from './pages/ProviderDetails.js'
import Providers from './pages/Providers.js'
import Chatbox from './pages/Chatbox.js'
import './App.css';



function App() {
  return (
    <>
      <AppNavbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/ProviderDetails" element={< ProviderInfo/>} />
        <Route exact path="/Providers" element={<Providers/>} />
        <Route exact path="/HeraChatbox" element={<Chatbox/>} />       
      </Routes>
      <Footer/>

    </>

  );
}

export default App;
