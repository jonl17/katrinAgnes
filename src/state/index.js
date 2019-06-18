import { combineReducers } from "redux"
import reducer from "./reducer"
import responsiveReducer from "./responsiveReducer"

export default combineReducers({ reducer, responsiveReducer })
