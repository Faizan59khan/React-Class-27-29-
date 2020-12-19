import React from 'react';

class Child extends React.Component{
    /*static getDerivedStateFromProps(props,state){     
        console.log("again gDSFP ",props);     //it rerurn the updated object of state
        return null             //jab jab data update ho wo miljae hamai like in fb post aate justnow krk
                                      
    }

    shouldComponentUpdate(){  //component ko render hone se rok deta hai
       // return false          //aese cond lagane agr apko data ajaye mgr render na ho ya baad mai chale
       if(this.props.count<5){
           return true
       }else{
           return false
       }
    }*/

    //Unmounting:
    componentWillUnmount(){
        console.log("Component Khalas....")
    }
    render(){
        return(
            <div>
               <h1>{this.props.count}</h1>
        
            </div>
        )
    }
}

export default Child;