import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';
import './Navbar.css';


export default function Navbar(props) {
    // const [text, setText] = useState("");
    // const click= ()=>{
    //     console.log("handle click");
    //     let newText;
    //     if(newText==='community'){
            
    //     }

    // }
  return (
<>
        
        <div class="nav">

        <div class="nav_bar_fixed">
        
        <div class="nav_left">
        <Link class="a_1" to="/">{props.title}</Link>
        </div>
        <div class="nav_right">
                <ul class="ul a_1">
                
                <li><Link class="a_1" to="/">Home</Link></li>
                <li><Link to="/about" class="a_1" >About</Link></li>
                <li><Link class="a_1" to="/login">Profile</Link></li>
                <li><Link class="a_1" to="/review">Review</Link></li> 

                </ul>            </div>
            </div>
        </div>
        </> 

  );
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    
}

Navbar.defaultProps = {
    title : "set title"

}