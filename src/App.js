import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
   <>
   <Navbar title = "Magic words"/>
   <Alert alert = "Enter valid symbols" />
   <div className="container my-3">
   <TextForm heading = "Enter the Text" />
   </div>
   
   
   
   
   </>
  );
}

export default App;
