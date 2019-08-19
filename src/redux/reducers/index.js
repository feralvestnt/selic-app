import { combineReducers } from "redux";
import medias from "./mediasReducer";
import historico from "./historicoReducer";

const rootReducer = combineReducers({
    medias,
    historico
});

export default rootReducer;
