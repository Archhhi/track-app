import {
  CHANGE_ROUTE,
  LOAD_COORDINATES_ERROR,
  LOAD_COORDINATES_START,
  LOAD_COORDINATES_SUCCESS
} from './actionTypes'

export const changeRoute = (start, end) => ({
  type: CHANGE_ROUTE,
  payload: { start, end }
})

export const loadCoordinatesStart = (start, end) => ({
  type: LOAD_COORDINATES_START,
  payload: { start, end }
})

export const loadCoordinatesSuccess = (route) => ({
  type: LOAD_COORDINATES_SUCCESS,
  route
})

export const loadCoordinatesError = (errorMessage) => ({
  type: LOAD_COORDINATES_ERROR,
  errorMessage
})
