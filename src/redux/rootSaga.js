import { all } from 'redux-saga/effects'
import { mapSaga } from './sagas/mapSaga'

export function* rootSaga() {
  yield all([mapSaga()])
}
