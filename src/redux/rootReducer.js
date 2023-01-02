import { combineReducers } from 'redux'
import { tableReducer } from './reducers/tableReducer'
import { mapReducer } from './reducers/mapReducer'

export const rootReducer = combineReducers({
  table: tableReducer,
  map: mapReducer
})
