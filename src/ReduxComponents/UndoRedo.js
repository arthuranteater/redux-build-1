import React from 'react'
import { ActionCreators } from 'redux-undo'
import { connect } from 'react-redux'



let UndoRedo = ({ canUndo, canRedo, onUndo, onRedo }) => (
    <p>
        <button onClick={onUndo} disabled={!canUndo}>
            Undo
    </button>
        <button onClick={onRedo} disabled={!canRedo}>
            Redo
    </button>
    </p>
)

const mapStateToProps = state => {
    return {
        canUndo: state.past.length > 0,
        canRedo: state.future.length > 0
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onUndo: () => dispatch(ActionCreators.undo()),
        onRedo: () => dispatch(ActionCreators.redo())
    }
}

UndoRedo = connect(
    mapStateToProps,
    mapDispatchToProps
)(UndoRedo)

export default UndoRedo