import './App.css';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import About from './Components/About';

function App() {
const [mode, setMode]=useState('light')
const [alert , setAlert]=useState(null);

const showAlert= (message, type)=>{
     setAlert({
           msg:message, 
           type:type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1000);
}
 
const toggleMode=()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor='#04142d';
    showAlert("Dark mode has been enabled", "success");

    // document.querySelector('textarea').style.backgroundColor='#6c757d';
    // document.querySelector('.para').style.color='white';
    // document.querySelector('#Textarea').style.color="white";
  }  
  else{
    setMode('light');
    document.body.style.backgroundColor='white';
    showAlert("Light mode has been enabled", "success");

    // document.querySelector('textarea').style.backgroundColor='white';
    // document.querySelector('.para').style.color='black';
    // document.querySelector('#Textarea').style.color="black";




  }
}
  return (
   <>
   <Navbar title="TextUtils" about="About Us" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <TextForm showAlert={showAlert} mode={mode} heading="Enter you text here to modify" />
   <About mode={mode}/>
   </>
  );
}

export default App;
