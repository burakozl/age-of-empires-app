import { all } from "redux-saga/effects";
import watcherUnitSaga from "./handlers/fetchUnits";

export default function* rootSaga() {
    yield all([watcherUnitSaga()]);
}
