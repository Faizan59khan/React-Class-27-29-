import React from 'react';
import { Link } from "react-router-dom"; //we use link instead of anker tag
class About extends React.Component{
    goto_home=()=>{
   //console.log(this.props) //this gives lot of things like history,goBack,goForward,push etc
   this.props.history.push('/')  //this is JS
    }
    render(){
        return(
                 <div>
                 <h1>About Page</h1>
                  <Link to="/">Go to Home</Link>  {/* used to instead of href */} 
                  <button onClick={this.goto_home}>Go to Home</button>
                 </div>
       
        )
    }
}

export default About;