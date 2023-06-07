import React from 'react'
import { Link } from 'react-router-dom'

export default function community(props) {
  return (
    <div>
    <h2>{props.title}</h2>
    <p>to join our community mail at <Link to="/community">kkamakshiojha@gmail.com</Link></p>
    </div>
  )
}





