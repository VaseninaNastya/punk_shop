import React from 'react';
import s from './CardHolder.module.scss'
import cl from "classnames";
import { cardListAction, cardListResolveAction, cardListRejectAction } from "../../actions/cardListActions";
import { bindActionCreators, compose } from "redux";
import {connect} from 'react-redux';
class CardHolder extends React.Component {
    state = {
        isBusy: false,
        items: []
    }
    componentDidMount() {
        const {
            fetchCardList,
            fetchCardListReject,
            fetchCardListResolve,
        } = this.props;
console.log('пропсы после подключения экшнов', this.props)
        console.log("fetchCardList();", fetchCardList())
        /*getData().once('value').then(res => {
            console.log("res", res.val());
            fetchCardListResolve(res.val());

        }).catch(err =>{
            fetchCardListReject(err)
        })*/
    }
    render() {
        return (
            <div>test</div>
        )
    }
}


//пока ничего

const mapStateToProps = (state) => {
    return {
        item: state.cardList || [],
    };
}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators({
fetchCardList: cardListAction,
fetchCardListResolve: cardListResolveAction,
fetchCardListReject: cardListRejectAction
    }, dispatch)
}



export default connect(mapStateToProps,mapDispatchToProps)(CardHolder);