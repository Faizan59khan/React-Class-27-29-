const INITIAL_STATE={
    username: "Mohsin"
}

export default (state =INITIAL_STATE,action) =>{
    console.log("app action=>",action)

    switch (action.type){     //username update krna
        case "SETDATA":
            return({
                ...state,
                username: action.data
            })
    }
    return state
}
