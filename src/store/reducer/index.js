import { combineReducers } from 'redux';  //combining all reducers
import auth_reducer from './auth_reducer'
import app_reducer from './app_reducer'

export default combineReducers({
    app:app_reducer,
    auth:auth_reducer

})

