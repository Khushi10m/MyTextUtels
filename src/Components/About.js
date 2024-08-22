import React  from 'react'

export default function About(props) {

  // let myStyle={backgroundColor:"black",color:"white"}
  // let [myStyle, setMyStyle]=useState({backgroundColor:"black",color:"white"})
  // const [btnText, setBtnText]=useState("Enable dark mode")
 
  // const toggleStyle = ()=>{
  //    if(myStyle.color === 'black'){
  //     setMyStyle({color:'white', backgroundColor:'black', border:'1px solid white'})
  //     setBtnText("Enable Light Mode")
  //    }else{
  //     setMyStyle({color:'black', backgroundColor:'white'})
  //     setBtnText("Enable Dark Mode")
  //    }
  // } 
   return (
    <div className='container' style={{color:props.mode==='light'?'black':'white'}}>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        <h1 className='my-3'>About Us</h1>
  <div className="accordion-item"  >
    <h2 className="accordion-header" style={{color:props.mode==='light'?'black':'white'}}>
      <button style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        What is TextUtlits
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}}>website that allows users to analyze text data. Some of the things that users can do with TextUtils include.A website that offers free text utilities to help with daily tasks and improve productivity. A simple website that allows users to analyze text data. Some of the things that users can do with TextUtils include:
        <ul>
          <li>Make text uppercase</li>
          <li>Make text Lowercase</li>
          <li>Extracting numbers from text</li>
          <li>Copy Text</li>
          <li>Remove Extra Spaces</li>
          <li>Text counter</li>
        </ul>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header"  style={{color:props.mode==='light'?'black':'white'}}>
      <button className="accordion-button collapsed" style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        Function of TextUtils      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}}>TextUtils is simply a set of utility functions to do operations on String objects. I usually have gone through many projects & I have seen many times in the code there is no use of TextUtils, I am not saying that it's necessary to use it but if we can reduce some extra work so then why not? gives you a way to analyze your text quickly and efficiently, word count, character count or reading time</div>
    </div>
  </div>
  <div className="accordion-item" >
    <h2 className="accordion-header" style={{color:props.mode==='light'?'black':'white'}}>
      <button className="accordion-button collapsed" style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}}  type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        About Us
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div className="accordion-body" style={{color:props.mode === 'light'?'black':'white', backgroundColor:props.mode === 'light'?'white':'#6c757d'}}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
    </div>
  </div>
</div>
{/* <button type='button' onClick={toggleStyle} className='btn btn-primary m-3'>{btnText}</button> */}
    </div>
  )
}
