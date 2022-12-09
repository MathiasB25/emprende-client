// Redux
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import * as Actions from '../redux/actions'
import { useEffect } from "react";

function ReduxActions({ state, actions, children }) {

    useEffect(() => {
        actions.getAuth();
        actions.getMyStore();
    }, [])

    return (
        <>
            {children}
        </>
    )
}

const mapStateToProps = (state) => ({
	state: state
});

const mapDispatchToProps = (dispatch) => ({
	actions: bindActionCreators(Actions, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ReduxActions);