import './App.css';

import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import { BrowserRouter as Router, Route, BrowserRouter, Routes} from 'react-router-dom';
import ReviewBlock from './components/Review';






function App() {
  return (
    <BrowserRouter>
    <Navbar title="Magic words" />


    <Routes>
    <Route path='/about' element={<About title= "About us"/>}/>
    <Route path='/' element={<TextForm heading="Enter the Text"/>}/>
    <Route path='/review' element={<ReviewBlock/>}/>
    
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