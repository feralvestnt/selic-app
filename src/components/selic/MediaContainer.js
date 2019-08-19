import React from "react";
import { connect } from "react-redux";
import * as selicActions from "../../redux/actions/selicActions";
import PropTypes from "prop-types";
import * as selicApi from "../../api/selicApi";
import { bindActionCreators } from "redux";
import MediaList from "./MediaList";

class MediaContainer extends React.Component {
 
  state = {
    anos: []
  };

  componentDidMount() {
    this.loadMedias();
    this.loadAnosDisponiveis();
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

  handleChangeAno(event) {
    const { name, value } = event.target;
    this.loadMedias(value);
  }

  loadMedias(ano) {
    const { actions } = this.props;
    actions.loadMedias(ano).catch(error => {
      alert("Falha ao carregar médias selic ao ano " + error);
    });
  }

  render() {
    return (
      <>
        <MediaList medias={this.props.medias} 
        anos={this.state.anos}
        onChangeAno={this.handleChangeAno.bind(this)}/>
      </>
    );
  }
}

MediaContainer.propTypes = {
  medias: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    medias: state.medias
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadMedias: bindActionCreators(selicActions.loadMedias, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaContainer);
