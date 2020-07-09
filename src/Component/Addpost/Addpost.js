import React, { useEffect,useState } from "react"
import Base from "../Base"
import Footer from "../Footer"
import { Button } from "react-bootstrap"
import { isAutheticated ,addZest} from "../../Backend/BackenAPI"
import {Redirect} from "react-router-dom"



const AddPost =()=>{

  const [values, setValues] = useState({
    tags: "",
    Tittle: "",
    error: "",
    loading: false,
    didRedirect: false,
    confessBody:"",
    heart:0,
    dislike:0
  });

  const { tags,Tittle, error,confessBody,dislike,heart,didRedirect } = values;


  const handleChange = name => event => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
 
  useEffect(() => {
		const script = document.createElement("script");
 script.src = "/js/addpost.js";
 const style =document.createElement("link");
 style.href="/CSS/Addpost.css";
 style.rel="stylesheet"
 document.head.appendChild(style);
 
    document.body.appendChild(script);

		
    });
    const {token,user:{_id}} = isAutheticated();
const {user}=isAutheticated();
    const onSubmit = event => {
      event.preventDefault();
      setValues({ ...values, error:false, loading: true });
      if(tags===""||Tittle===""||confessBody==="")
      {
        setValues({...values,error:"All Fields Must be filled"})
      }
      else
      {
      
      addZest({tags,Tittle,confessBody,heart,dislike },token,_id)
        .then(data => {
          if (data.error) {
            setValues({ ...values, error: data.error, loading: false });
          }
          else{
            setValues({
              ...values,
              didRedirect: true
            })
          }
        })
        .catch(err=>console.log(err));
      }
    };

    const performRedirect = () => {
      if (didRedirect) {
        if (user && user.role === 1) {
          return <Redirect to="/admin/dashboard" />;
        } else {
          return <Redirect to="/user/dashboard" />;
        }
      }
      
    };

    const errorMessage = () => {
      return (
        <div className="row">
          <div className="col-md-6 offset-sm-3 text-left">
            <div
              className="alert alert-danger"
              style={{ display: error ? "" : "none" }}
            >
              {error}
            </div>
          </div>
        </div>
      );
    };
    
    
const post=()=>{ return(
  <div>
  <React.Fragment>
        <header >
            <Base/>

        </header>
        <main>
        <div class="wrapper-post" style={{marginTop:"20px"}}>
          <h1>New Post</h1>
        <input id="input-post" style={{ textAlign: "start"}} type="text" placeholder="Tags" value={tags} onChange={handleChange("tags")}/>
        <div className="options">
        <input id="input-post" style={{ textAlign: "start"}} type="text" placeholder="Title" value={Tittle} onChange={handleChange("Tittle")}/>

        </div>
        


<textarea class="form-control" rows="15" value={confessBody} onChange={handleChange("confessBody")}
></textarea>
<div className="container">
 <div className="row justify-content-md-center">
   <div className="col col-lg-6 col-sm-6 col-md-6" >
   <Button style={{marginTop:"20px",marginBottom:"20px"}} id="button-post" className="btn btn-block" onClick={onSubmit}>POST</Button>
     </div> 

 </div>


</div>

</div>


        </main>
        <footer>
            <Footer/>
        </footer>
    </React.Fragment>
    
      
    </div>
)

}
    return(
      <div>
      {post()}
      {errorMessage()}

      {performRedirect()}


      </div>

    )
   
}

export default AddPost;