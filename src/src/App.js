import {useEffect,useState} from "react";
import './App.css';
import Letras from "./componentes/Letras";
import Palabras from "./componentes/Palabras";





  function App() {
 
  const [text, setText]= useState("");


  function changeTextHandler (event) {
    setText (event.target.value);
    
  }

    return (
    <>
    <h1>Texto:</h1>
    <textarea onChange={changeTextHandler}
     value={text} />
      

    < Letras text={text}/>
    < Palabras text={text}/>

    </>
  )
}
export default App;

