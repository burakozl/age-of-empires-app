import { call, put, takeLatest } from 'redux-saga/effects';
import fetchGetUnits from '../requests/fetchUnits';

function* handleGetUnits() {
    try {
        const units = yield call(fetchGetUnits);
        yield put({ type: "GET_UNITS_SUCCESS", units: units.units });
    } catch (err) {
        yield put({ type: "GET_UNITS_FAILED", message: err.message });
    }
}

function* watcherUnitSaga() {
    yield takeLatest("GET_UNITS_REQUESTED", handleGetUnits)
}

export default watcherUnitSaga;

