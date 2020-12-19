const INITIAL_STATE={
    app: "chatapp"
}

export default (state =INITIAL_STATE,action) =>{
    console.log("Auth action=>",action) //jitne bhi reducer sab mai data milta
    return state
}