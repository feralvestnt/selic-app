import React from "react";
import { connect } from "react-redux";
import * as selicActions from "../../redux/actions/selicActions";
import * as selicApi from "../../api/selicApi";
import PropTypes from "prop-types";
import HistoricoList from "./HistoricoList";
import { bindActionCreators } from "redux";

class HistoricoContainer extends React.Component {

  state = {
    anos: [],
    meses: [],
    mesesAno: [],
    ano: null, 
    mes: null
  };

  componentDidMount() {
    this.loadHistorico(this.state.ano, this.state.mes);
    this.loadAnosDisponiveis();
    this.loadMesesDisponiveis(this.state.ano);
  }

  loadHistorico(ano, mes) {
    const { actions } = this.props;
    actions.loadHistorico(ano, mes).catch(error => {
      alert("Loading historico failed " + error);
    });
  }

  loadAnosDisponiveis() {
    selicApi.getAnosDisponiveis()
    .then(anos => {
      this.setState({anos: anos});
    })
    .catch(error => {
      alert("Loading anos failed " + error);
    });
  }

  loadMesesDisponiveis() {
    selicApi.getMesesDisponiveis()
      .then(meses => {
        this.setState({meses: meses});
      })
      .catch(error => {
        alert("Loading meses failed " + error);
    });
  }

  handleChangeAno(event) {
    const { name, value } = event.target;
    let mesesAno = this.state.meses.filter(m => m.ano == value);
    this.setState({mesesAno, ano: value});
  }

  handleChangeMes(event) {
    const { name, value } = event.target;
    this.loadHistorico(this.state.ano, value);
  }

  render() {
    return (
      <HistoricoList
        historico={this.props.historico}
        onChangeAno={this.handleChangeAno.bind(this)}
        onChangeMes={this.handleChangeMes.bind(this)}
        mesesAno={this.state.mesesAno}
        anos={this.state.anos}
      />
    );
  }
}

HistoricoContainer.propTypes = {
  historico: PropTypes.array.isRequired, 
  actions: PropTypes.object.isRequired, 
  meses: PropTypes.array.isRequired, 
  anos: PropTypes.array.isRequired, 
};

function mapStateToProps(state) {
  return {
    historico: state.historico, 
    anos: [],
    meses: []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadHistorico: bindActionCreators(selicActions.loadHistorico, dispatch),
      loadMesesDisponiveis: bindActionCreators(selicActions.loadMesesDisponiveis, dispatch),
      loadAnosDisponiveis: bindActionCreators(selicActions.loadAnosDisponiveis, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoricoContainer);
