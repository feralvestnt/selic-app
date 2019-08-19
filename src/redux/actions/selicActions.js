import * as types from "./actionTypes";
import * as selicApi from "../../api/selicApi";

export function loadMediasSuccess(medias) {
  return { type: types.LOAD_MEDIAS_SUCCESS, medias };
}

export function loadMedias(ano) {
  return function(dispatch) {
    return selicApi
      .getMedias(ano)
      .then(medias => {
        dispatch(loadMediasSuccess(medias));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadHistoricoSuccesss(historico) {
  return { type: types.LOAD_HISTORICO_SUCCESS, historico };
}

export function loadHistorico(ano, mes) {
  return function(dispatch) {
    return selicApi
      .getHistorico(ano, mes)
      .then(historico => {
        dispatch(loadHistoricoSuccesss(historico));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadAnosSuccess(anos) {
  return { type: types.LOAD_ANOS_SUCCESS, anos };
}

export function loadAnosDisponiveis() {
  return function(dispatch) {
    return selicApi
      .getAnosDisponiveis()
      .then(anos => {
        dispatch(loadAnosSuccess(anos));
      })
      .catch(error => {
        throw error;
      });
  };
}

export function loadMesesSuccess(meses) {
  return { type: types.LOAD_MESES_SUCCESS, meses };
}

export function loadMesesDisponiveis() {
  return function(dispatch) {
    return selicApi
      .getMesesDisponiveis()
      .then(medias => {
        dispatch(loadMesesSuccess(medias));
      })
      .catch(error => {
        throw error;
      });
  };
}