import { createStore, combineReducer } from "redux"
import userReducer from "./reducers/user"

const rootReducer = combineReducer({
  user: userReducer,
})

const store = createStore(rootReducer)

export default store
