import {
  CHANGE_ROUTE,
  LOAD_COORDINATES_ERROR,
  LOAD_COORDINATES_SUCCESS
} from '../actions/map/actionTypes'

const initialState = {
  errorMessage: '',
  coordinates: {
    start: [],
    end: []
  },
  route: null
}

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_ROUTE: {
      return {
        ...state,
        coordinates: {
          ...state.coordinates,
          start: [...action.payload.start],
          end: [...action.payload.end]
        }
      }
    }
    case LOAD_COORDINATES_SUCCESS: {
      return {
        ...state,
        route: action.route
      }
    }
    case LOAD_COORDINATES_ERROR: {
      return {
        ...state,
        errorMessage: action.errorMessage
      }
    }
    default:
      return state
  }
}
