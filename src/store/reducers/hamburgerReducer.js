import * as actionTypes from "../actions"

const initialState = {
    toggleSideBar:true
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.CloseSideBar:
            return {
                ...state,
                toggleSideBar:!state.toggleSideBar
            }
        default:
            return state;
    }
}
export default reducer;