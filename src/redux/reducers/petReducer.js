

const petReducer = (state = [], action) => {

    if (action.type === '') {
        console.log('petReducer', action.payload)
    }
    
    return state;

};

export default petReducer;