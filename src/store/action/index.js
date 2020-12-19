const set_data=(data)=>{

    return (dispatch)=>{    //es dispatch se update krwaye ge data (& dispatch mai jo dege wo action jo app_reducer mai hain wha milega)
                  
       // console.log("Hello")
       dispatch({type:"setdata",data:data})
    }
}

export{
    set_data
}