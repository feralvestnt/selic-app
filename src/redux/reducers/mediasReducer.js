import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function mediasReducer(state = initialState.medias, action) {
  switch (action.type) {
    case types.LOAD_MEDIAS_SUCCESS:
      return action.medias;
    default:
      return state;
  }
}
