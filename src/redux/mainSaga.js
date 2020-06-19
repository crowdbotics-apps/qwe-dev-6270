import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import CalendarView6158Saga from '../features/CalendarView6158/redux/sagas';
import EmailAuth6157Saga from '../features/EmailAuth6157/redux/sagas';
import CalendarSaga from '../features/Calendar/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
CalendarView6158Saga,
EmailAuth6157Saga,
CalendarSaga,
EmailAuthSaga,
    
  ]);
}