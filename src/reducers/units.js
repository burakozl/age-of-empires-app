
const initialState = {
    units: [],
    loading: false,
    error: null
}

const units = ( state = initialState, action) => {
    switch(action.type) {
        case "GET_UNITS_REQUESTED":
            return { ...state, loading: true };
        case "GET_UNITS_SUCCESS":
            return { ...state, loading: false, units: action.units};
        case "GET_UNITS_FAILED":
            return { ...state, loading: false, error: action.message};
        default:
            return state;
    }
};

export default units;