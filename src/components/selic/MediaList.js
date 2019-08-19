import React from "react";
import PropTypes from "prop-types";
import SelectInput from "../common/SelectInput";

const MediaList = ({ medias, onChangeAno, anos }) => (
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
  
    {medias.length === 0 ? <div>Selecione Ano e Mês para buscar.</div> : 
    <div>{medias.length} Registro(s) encontrado(s).</div>}

    <table className="table">
      <thead>
        <tr>
          <th>Ano</th>
          <th>Media</th>
        </tr>
      </thead>
      <tbody>
        {medias.map(media => {
          return (
            <tr key={media.media}>
              <td>{media.ano}</td>
              <td>{media.media}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

MediaList.propTypes = {
  medias: PropTypes.array.isRequired,
  onChangeAno: PropTypes.func.isRequired,
  anos: PropTypes.array.isRequired,
};

export default MediaList;
