import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHouses } from '../../thunks';

class Houses extends Component {
    componentDidMount = async () => {
        const { getHouses } = this.props;
        await getHouses();
    }

    render() {
      console.log(this.props.houses)
    return (
      <div>

      </div>
    )
  }
}

export const mapStateToProps = state => ({
    houses: state.houses
});

export const mapDispatchToProps = dispatch => ({
    getHouses: () => dispatch(getHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
