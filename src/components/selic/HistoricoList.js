import React from "react";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";

const HistoricoList = ({
  historico, onChangeMes, onChangeAno, anos, mesesAno
}) => {
  return (
    <div>
      <SelectInput
          name="ano"
          label="Ano"
          defaultOption="Selecione"
          onChange={onChangeAno}
          options={anos.map(ano => ({
            value: ano,
            text: ano
          }))}
        />
      <SelectInput
          name="mes"
          label="Mês"
          defaultOption="Selecione"
          onChange={onChangeMes}
          options={mesesAno.map(mes => ({
            value: mes.mes,
            text: mes.mes
          }))}
        />

      {historico.length === 0 ? <div>Selecione Ano e Mês para buscar.</div> : 
      <div>{historico.length} Registro(s) encontrado(s).</div>}

      <table className="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Data Referência</th>
          <th>Estimativa Taxa</th>
        </tr>
      </thead>
      <tbody>
        {historico.map(hist => {
          return (
            <tr key={hist.id}>
              <td>{hist.id}</td>
              <td>{hist.dataReferencia}</td>
              <td>{hist.estimativaTaxaSelic}</td>
            </tr>
          );
        })}
      </tbody>
      </table>
    </div>
  );
};

HistoricoList.propTypes = {
  historico: PropTypes.array.isRequired, 
  onChangeMes: PropTypes.func.isRequired,
  onChangeAno: PropTypes.func.isRequired,
  anos: PropTypes.array.isRequired,
  mesesAno: PropTypes.array.isRequired
};

export default HistoricoList;
