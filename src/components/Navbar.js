import React, {Component} from 'react'
import { Link }  from 'react-router-dom'

import logo from '../images/badge-header.svg'
import '../styles/Navbar.css'


export default class Navbar extends Component{
   render(){
       return(
           <div className="Navbar">
            <div className="container-fluid">
                <Link to="/" className="Navbar__brand">    
                    <img className="Navbar__brand-logo" src={logo} alt=""/>
                 {/*    <span className="font-weight-light">Platzi</span>
                    <span className="font-weight-bold"> Conf</span> */}
                </Link>
             </div>
           </div>
       )
   }
}