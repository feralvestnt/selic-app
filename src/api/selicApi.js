import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/api/selic/";
import axios from "axios";

export function getHistorico(ano, mes) {
  return axios.get(baseUrl + "historico", {params: {ano: ano, mes: mes}})
    .then(handleResponse)
    .catch(handleError);
}

export function getMedias(ano) {
  return axios.get(baseUrl + "medias", {params: {ano: ano}})
    .then(handleResponse)
    .catch(handleError);
}

export function getMesesDisponiveis() {
  return axios.get(baseUrl + "meses-disponiveis")
    .then(handleResponse)
    .catch(handleError);
}

export function getAnosDisponiveis() {
  return axios.get(baseUrl + "anos-disponiveis")
    .then(handleResponse)
    .catch(handleError);
}