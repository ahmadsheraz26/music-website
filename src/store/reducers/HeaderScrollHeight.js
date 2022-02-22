import * as actionTypes from "../actions"

const initialState = {
    HeaderHeight:65
}

const reducer = (state=initialState, action) => {
    
    switch(action.type){
        case actionTypes.Update_Header_Height:
            console.log("as")
            return {
                ...state,
                HeaderHeight: state.HeaderHeight - 5
            }
        default:
            return state;
    }

}
export default reducer;