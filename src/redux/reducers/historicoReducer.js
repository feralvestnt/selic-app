import * as types from "../actions/actionTypes";
import initialState from "./initialState";

export default function historicoReducer(state = initialState.historico, action) {
  switch (action.type) {
    case types.LOAD_HISTORICO_SUCCESS:
      return action.historico ? action.historico : initialState.historico
    default:
      return state;
  }
}
