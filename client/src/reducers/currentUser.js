const currentUserReducer = (state = null, action) => {
    switch(action.type){
        case 'FETCH_CURRENT_USER':
            return action.playload;
            default:
                return state;

    }
}
export default currentUserReducer