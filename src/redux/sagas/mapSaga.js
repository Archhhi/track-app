import { call, put, takeEvery } from 'redux-saga/effects'
import L from 'leaflet'
import { LOAD_COORDINATES_START } from '../actions/map/actionTypes'
import { loadCoordinatesError, loadCoordinatesSuccess } from '../actions/map'

function* loadCoordinatesSaga({ payload: { start, end } }) {
  try {
    const route = yield call(() =>
      L.Routing.control({
        position: 'topleft',
        lineOptions: {
          styles: [
            {
              color: '#757de8'
            }
          ]
        },
        waypoints: [start, end]
      })
    )
    yield put(loadCoordinatesSuccess(route))
  } catch ({ message }) {
    yield put(loadCoordinatesError(message))
  }
}

export function* mapSaga() {
  yield takeEvery(LOAD_COORDINATES_START, loadCoordinatesSaga)
}
