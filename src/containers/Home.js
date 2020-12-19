import React from 'react';
import { Link } from "react-router-dom"; //we use link instead of anker tag

class Home extends React.Component{
    render(){
        return(
         
            <div>
                <h1>Home Page</h1>
                <Link to="/About">Go to About</Link>  {/* used to instead of href */}
            </div>
           
        )
    }
}

export default Home;