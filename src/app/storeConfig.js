import {createStore, applyMiddleware, combineReducers} from "redux"
import thunk from "redux-thunk"
import {FETCHING_CONTENT, FETCH_SUCCESS} from './constants'

//define initial state
const initialState = {
  content: [],
  isFetching: false
}
//content reducer
const contentReducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCHING_CONTENT: {
      return {
        ...state,
        isFetching: true,
        content: []
      }
    }
    case FETCH_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        content: [...state.content, action.payload]
      }
    }
    default: return state
  }
}
//root reducer
const rootReducer = combineReducers({
  content: contentReducer
});
//initialize store
const store = createStore(rootReducer, applyMiddleware(thunk));
//export module
export default store;
