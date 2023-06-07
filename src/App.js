import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import Comunity from './components/Comunity';
import Join from './components/Join';
import Profile from './components/Profile';


function App() {
  return (
    <BrowserRouter>
    <Navbar title="Magic words" />
     <Alert alert="Enter valid symbols" />
    <Routes>
    <Route path='/about' element={<About title= "About us"/>}/>
    <Route path='/' element={<TextForm heading="Enter the Text"/>}/>

    <Route path='/comunity' element={<Comunity title = "MEMBERS"/>}/>
    <Route path='/join' element={<Join title = "CONTACT US" />}/>
    <Route path='/profile' element={<Profile title = "MAGIC WORDS" />}/>
    
    </Routes>
    </BrowserRouter>
     
 
  );
}

export default App;

{/* <Router>
<Navbar title="Magic words" />
  <Alert alert="Enter valid symbols" />
  <div className="container my-3">
      <Route path="/about">
        <About title= "About us"/>
      </Route>
      <Route path="/">
        <TextForm heading="Enter the Text"/>
      </Route>
  </div>
</Router> */}