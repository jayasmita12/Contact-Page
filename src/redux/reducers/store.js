
import { contactReducers } from "./contact" 
import {legacy_createStore as createStore} from "redux"


 export const store= createStore(contactReducers);