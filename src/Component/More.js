import React from "react"
import Footer from "./Footer"
import Base from "./Base"
import {FaMale , FaHeart, FaHeartBroken} from 'react-icons/fa';
import { IconContext } from "react-icons";
import { Button } from "react-bootstrap"


const More=()=>{
    return(
        <React.Fragment>
            <header style={{marginBottom:"60px",
        paddingTop:"10px"}}>
<Base />
            </header>
            <main>
            <div className="container">
                  <div className="row">
                      <div className="col-lg-12">
                      <div class="card" >
  <div className="card-body">

    <h5 className="card-title css-text-color"><IconContext.Provider value={{ color: "blue", className: "global-class-name" }}>
  
    <FaMale/>

</IconContext.Provider>Male,49</h5>
<br/>
    <h6 className="card-subtitle mb-2 text-muted css-text-color">Jan 26, 2020</h6>

    <br/>
    <p className="card-text">"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."</p>
    <div className="text-center">
    <br/>
    <div className="container">
        <div className="row">
        <div class="col-sm-6">
        <Button className="btn btn-block"><IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  
  <FaHeart/>

</IconContext.Provider></Button>
   
   </div>

   <div class="col-sm-6">
        <Button className="btn btn-block" style={{backgroundColor:"palevioletred"}} ><IconContext.Provider value={{ color: "white", className: "global-class-name" }}>
  
  <FaHeartBroken/>

</IconContext.Provider></Button>
  
   </div>

        </div>
    
    </div>
    
    
  </div>
</div>
</div>
                      </div>
                      </div>
                      </div>

            </main>
            <footer>
                <Footer/>
            </footer>
        </React.Fragment>
    )
}
export default More;