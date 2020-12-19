import React from 'react';
import firebase from './config/firebase.js'
import './App.css'
import Child from './components/Child.js';

//  class App extends React.Component{
//     constructor(){
//         super()
//         this.state={
//             todos: [{title: "faizan",edit: false},{title: "kashan", edit: false}], //now multiple obj bnaliye
//             value: ""
//         }
//     }
//    add_todo=()=>{
//        let obj={title:this.state.value}
  
//        firebase.database().ref('/').child('todos').push(obj)

//        this.setState({
//       todos: [...this.state.todos, obj],
//       value: ""                   //to empty value after set the item
//     })
//    }
//    del_todo=(index)=>{
//     this.state.todos.splice(index,1);
//     this.setState({
//         todos: this.state.todos       //setState again render krega then jo todos upr change hue usse add
//         //krdia        
//     })
// }
//   edit_todo=(index,value)=>{
    
//     this.state.todos[index].edit=true
//     this.setState({
//         todos: this.state.todos       //setState again render krega then jo todos upr change hue usse add
//         //krdia        
//     })
//   }
//   edit_todo=(index,value)=>{
    
//     this.state.todos[index].edit=true
//     this.setState({
//         todos: this.state.todos       //setState again render krega then jo todos upr change hue usse add
//         //krdia        
//     })
//   }
//   handle_change=(e,index)=>{
//     this.state.todos[index].title=e.target.value
//     this.setState({
//         todos: this.state.todos       //setState again render krega then jo todos upr change hue usse add
//         //krdia        
//     })
//   }
//   update=(index)=>{
//     this.state.todos[index].edit=false;
//     this.setState({
//         todos: this.state.todos       //setState again render krega then jo todos upr change hue usse add
//         //krdia        
//     })
//   }

//   render(){
//       let {todos ,value} = this.state  //destructuring (now no need to give this.state)
//       return(
//           <div>      {/* value={value} to empty value after set the item */}
//               <input value={value} onChange={(e)=>{this.setState({value:e.target.value})}} type="text" placeholder="Enter value"></input>
//               <button onClick={this.add_todo}>Add Item</button> 
//               <ul>
//                   {todos.map((value,index)=>{ //cond value.edit true ho to input warna value.title dekhao
//                      return <li key={index}>
//                     {value.edit ? 
//                     <input value={value.title} type="text" onChange={(e)=>this.handle_change(e,index)}/>
//                      :
//                      value.title}

//                      {value.edit ? //one more condition that when edit was true button will show update
//                      <button onClick={()=>this.update(index)}>Update</button>:
//                      <button onClick={()=>this.edit_todo(index,value.title)}>Edit</button>
//                   }
//                      <button onClick={()=>this.del_todo(index)}>Delete</button> {/* As we see we have index */}
//                                                                     {/* so we used that index to del value */}
//                      </li>   //key is a prop and index is unique
//                   })}
//               </ul>

//           </div>
//       )
//   }
// }

// export default App; 


//Router
// import Approuter from './config/Router'

// class App extends React.Component{
//     render(){
//         return(
//            <Approuter/>
//         )
            
        
//     }
// }
// export default App; 


//LIFECYCLE



//Redux
import { connect } from 'react-redux'
import {set_data} from './store/action'
class App extends React.Component{
    constructor(){
        super()
        this.state={
            
            count:0
        }
        console.log("Constructor") //1st
    }



    render(){ //3rd
        console.log("redux=>",this.props)
        return(
             <div style={{textAlign:'center'}}>
                 <h1>React LIFECYCLE</h1>
                

        {this.state.count<5 &&<Child count={this.state.count}/>} {/* Now this will run from child */}

                 <button onClick={()=>this.setState({count:this.state.count+1})}>Increament</button>
                 <button onClick={()=>this.setState({count:this.state.count-1})}>Dereament</button>
        <p>{this.props.username}</p>
                 {/* we use in cart functionality  */}

                 <button onClick={()=>this.props.set_data("Bhai data yaha se bhi ja skta hai")}>Set Data</button>
             </div>

        )
    }
}
const mapStateToProps=(state)=>(  //parameters(state) mai global property miljaege 
    {
        app:state.auth.app,           //jhan bhi this.prop call hoga yha value add hojaige
        email: "fk345@g.com",
    username: state.app.username
    }
)

const mapDispatchToProp=(dispatch)=>(  //it is used to update state and functions are make in mDTP
    {
       //set_data: ()=> set_data()
       set_data: (data)=> dispatch(set_data(data)) //to connect with redux
    }
)

export default connect(mapStateToProps,mapDispatchToProp) (App); 


