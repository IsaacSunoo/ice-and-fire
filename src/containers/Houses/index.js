import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getHouses } from '../../thunks';
import HouseCard from '../../components/HouseCard';
import wolfGif from '../../assets/wolf.gif';

class Houses extends Component {
    componentDidMount = async () => {
        const { getHouses } = this.props;
        await getHouses();
    }

    render() {
        const { houses, isLoading } = this.props;
        let displayHouses;
        if (houses.length !== 0) {
            displayHouses = houses.map(house => (<HouseCard {...house} key={house.name} />))
        }

    return (
        isLoading ? (<div><img src={wolfGif} alt='loading wolf' /></div>) : (<div className='houses-container'>{displayHouses}</div>)
    )
  }
}

export const mapStateToProps = state => ({
    houses: state.houses,
    isLoading: state.isLoading
});

export const mapDispatchToProps = dispatch => ({
    getHouses: () => dispatch(getHouses())
});

export default connect(mapStateToProps, mapDispatchToProps)(Houses);
