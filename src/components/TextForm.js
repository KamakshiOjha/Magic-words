import React, {useState} from 'react'
import './Textform.css';


export default function TextForm(props) {
    const [text, setText] = useState("");
    const upperclick= ()=>{
        console.log("handle upper click");
        let newText = text.toUpperCase();
        setText(newText);

    }
    const lowerclick= ()=>{
        console.log("handle lower click");
        let newText = text.toLowerCase();
        setText(newText);

    }
    const clearclick= ()=>{
        console.log("handle clear click");
        let newText = " ";
        setText(newText);

    }
    const onchange = (event)=>{
        console.log("handle on change");
        setText(event.target.value);
    }

  return (
    <div className="textform">
        <h2 className='h2_tf'>{props.heading}</h2>
        <div className="textform_in">
        <textarea className="text" value= {text} onChange={onchange} id="" rows="6"></textarea>
        </div>
        <button type="button" className="button_tf" onClick={upperclick} >To Uppercase</button>
        <button type="button" className="button_tf" onClick={lowerclick}>To Lowercase</button>
        <button type="button" className="button_tf" onClick={clearclick}>To clear</button>
        <div className="textform_2">
            <h3>Your text has</h3>
            <p className='para_tf'>{text.split(" ").length} word  and {text.length} characters</p>
        </div>
        <div className="textform_2">
            <h3>You can read this text in</h3>
            <p className='para_tf'>{0.008 * text.split(" ").length} minutes</p>
        </div>

        <div className="textform_2">
            <h3>Preview</h3>
            <p className='para_tf'>{text}</p>
        </div>

 </div>
  )
}
