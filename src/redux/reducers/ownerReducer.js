const ownerReducer = (state = [], action) => {
    if (action.type === 'SET_OWNERS'){
        console.log('owner reducer owners:', action.payload);
        return action.payload;
    }
    return state;
}

export default ownerReducer;