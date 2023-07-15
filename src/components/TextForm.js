import React, {useState} from 'react'

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
    <div className="">
        <h2>{props.heading}</h2>
        <div className="">
        <textarea className="" value= {text} onChange={onchange} id="" rows="6"></textarea>
        </div>
        <button type="button" className="" onClick={upperclick} >To Uppercase</button>
        <button type="button" className="" onClick={lowerclick}>To Lowercase</button>
        <button type="button" className="" onClick={clearclick}>To clear</button>
        <div className="">
            <h3>your text has</h3>
            <p>{text.split(" ").length} word  and {text.length} characters</p>
        </div>
        <div className="">
            <h3>you can read this text in</h3>
            <p>{0.008 * text.split(" ").length} minutes</p>
        </div>

        <div className="">
            <h3>Preview</h3>
            <p>{text}</p>
        </div>

 </div>
  )
}
