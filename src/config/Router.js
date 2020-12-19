import React from "react";
import {BrowserRouter as Router, Route,} from "react-router-dom";
import Home from '../containers/Home'
import About from '../containers/About'
 

class Approuter extends React.Component{ /* name Approuter randomly lia and 
                                                      now this is the parent component of web*/
    render(){
        return(
            <Router>                                      {/* Router parent hoga and route child */}
                <Route  exact path="/" component={Home}/> {/* exact prop means root ho tohe home dikhao */}
                <Route path="/About" component={About}/>
            </Router>
        )
    }
}

export default Approuter;