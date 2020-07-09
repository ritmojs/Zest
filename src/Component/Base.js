import React from "react"

import { FaInstagram, FaFacebook,  FaGoogle,  FaTwitter} from 'react-icons/fa';
import { IconContext } from "react-icons";


import {Nav, Navbar,Button} from "react-bootstrap"
const Base=()=>{
    return(
        <div>
          
         <Navbar  expand="lg">
         <Navbar.Brand href="#home">
      <img
        alt=""
        src="/zestl.png"
        width="100"
        height="70"
        className="d-inline-block align-top"
      />{' '}
    
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav"  />
  <Navbar.Collapse id="basic-navbar-nav " >
    <Nav className="mr-auto">
      
    </Nav>
    <Nav>
    
   
  
    <Nav.Link> <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div>
    <FaFacebook/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div>
    <FaGoogle/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div>
    <FaTwitter/>
  </div>
</IconContext.Provider> </Nav.Link>
<Nav.Link> <IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  <div>
    <FaInstagram className="mr-sm-4"/>
  </div>
</IconContext.Provider> </Nav.Link>

  {/*<Nav.Link href="/Signin">Signin</Nav.Link>
    <Nav.Link href="/Signin">Signin</Nav.Link>*/}
     <Button variant="outline-light"  className="mr-sm-4" href={"/signin"} >SignIn</Button>
     {" "}
     <Button variant="outline-light" href={"/signup"}>SignUp</Button>
    
    </Nav>
   
  </Navbar.Collapse>
</Navbar>


            
        </div>  )
}


export default Base;