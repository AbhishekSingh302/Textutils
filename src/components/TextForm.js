import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("up case was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  }
  const handleClearClick = ()=>{
    let newText = ("");
    setText(newText);
    props.showAlert("Text cleared", "success");
  }
  const handleOnChange = (event)=>{
    // console.log("on change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  return (
    <>
    <div style={{color: props.mode=== 'light'?'black':'white'}}>
        <h1 className='mb-3'>{props.heading}</h1>
       <div className="mb-3">
       <textarea className="form-control my-2" style={{backgroundColor: props.mode=== 'light'?'white':'#13466e', color: props.mode=== 'light'?'black':'white'}} id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
       <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>Convert to uppercase</button>
       <button disabled={text.length===0} className="btn btn-primary my-1 mx-1" onClick={handleLoClick}>Convert to lowercase</button>
       <button disabled={text.length===0} className="btn btn-primary my-1mx-1" onClick={handleClearClick}>Clear text</button>
       </div>      
    </div>
    <div className='container' style={{color: props.mode=== 'light'?'black':'white'}}>
      <h2>Your Text Summary</h2>
      <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p> 
      <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Nothing to preview"}</p>
    </div>
    </>
  )
}
