import leadsReducer from './reducers/leadsReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  leads: leadsReducer
})

export default rootReducer