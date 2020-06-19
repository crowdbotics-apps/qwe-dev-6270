import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import CalendarView6158Reducer from '../features/CalendarView6158/redux/reducers';
import EmailAuth6157Reducer from '../features/EmailAuth6157/redux/reducers';
import CalendarReducer from '../features/Calendar/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
CalendarView6158: CalendarView6158Reducer,
EmailAuth6157: EmailAuth6157Reducer,
Calendar: CalendarReducer,
EmailAuth: EmailAuthReducer,

});