

const petReducer = (state = [], action) => {

    if (action.type === 'SET_PETS') {
        console.log('petReducer', action.payload)
        return action.payload;
    }
    
    return state;

};

export default petReducer;