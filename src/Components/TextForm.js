import React, {useState} from 'react'

export default function TextForm(props) {
    const  handlupClick = ()=>{
        const newText= text.toUpperCase()
        setText(newText);
        props.showAlert("Text Converted to UpperCase", "success");


      }
      const  handlLowerCase = ()=>{
        const newText= text.toLowerCase()
        setText(newText);
        props.showAlert("Text Converted to LowerCase", "success");


      }
      const  clickToCopy = ()=>{
        const text =document.getElementById('Textarea');
        const newText= text.value;
        navigator.clipboard.writeText(newText);
        props.showAlert("Text Copied", "success");

        // navigator.clipboard.writeText(newText).then(function(){
        //   alert("Copied text"+ newText)
        // }).catch(function(error){
        //   console.error("could not copy text"+ error);        })      
      }
      const hndleClearClick= ()=>{
        let newText="";
        setText(newText)
        props.showAlert("Text Cleared", "success");

      }
      const handlExtraSpaces=()=>{
      let newText= text.split(/[ ]+/);
      setText(newText.join(" "));
      props.showAlert("Extra Spaces Removed", "success");


      }
      const handlOnChange = (event)=>{
        setText(event.target.value);    
      
      }
        const [text, setText]=useState("Enter your text here");
        
        //text= "new text"; //Wrong way to set text.
        //setText("new text"); // right way to set text.
      
      
  return (
    <>

     <div className="container m-4" style={{color:props.mode==='light'?'black':'white'}}>
        <h3>{props.heading}</h3>
        <form>
      <div className='mb-3'>
    <textarea  value={text} className="form-control" onChange={handlOnChange} style={{backgroundColor : props.mode=== 'light'?'white':'#6c757d', color:props.mode==='light'?'black':'white'}} id="Textarea"  rows="8"></textarea>
  </div>
</form>
<button className='btn btn-primary me-2' onClick={handlupClick}>ToUpperCase</button>
<button className='btn btn-primary me-3' onClick={handlLowerCase}>ToLowercase</button>
<button className='btn btn-primary me-3' onClick={clickToCopy}>Copy Text</button>
<button className='btn btn-primary me-3' onClick={handlExtraSpaces}>Remove Extra Spaces</button>
<button className='btn btn-primary me-3' onClick={hndleClearClick}>Clear Text</button> 
    <div className="container my-3">
      <h4>Your Text Summary</h4>
      <p className='pb-1'>
      <span>{text.split(" ").length }  words and {text.length} characters </span>   
      <span > {0.08 * text.split(" ").length} minutes To Read</span>
      </p>
      <h4>Preview</h4>
      <p>{text}</p>
    </div>
    </div>

    </>
  )
}
