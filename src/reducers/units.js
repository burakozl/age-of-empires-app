
const initialState = {
    units: [],
    status: "idle",
    loading: false,
    error: null,
}

const units = ( state = initialState, action) => {
    switch(action.type) {
        case "GET_UNITS_REQUESTED":
            return { ...state, loading: true, status: 'loading' };
        case "GET_UNITS_SUCCESS":
            return {
                ...state,
                loading: false,
                units: action.units,
                status: 'success',
                filterByDarkAge: action.units.filter(item => item.age === 'Dark'),
                filterByFeudalAge: action.units.filter(item => item.age === 'Feudal'),
                filterByCastleAge: action.units.filter(item => item.age === 'Castle'),
                filterByImperialAge: action.units.filter(item => item.age === 'Imperial'),     
                //filterByWood: action.units.filter(item => item.cost.Wood),     
            };
        case "GET_UNITS_FAILED":
            return { ...state, loading: false, error: action.message, status: 'failed' };
        default:
            return state;
    }
};

export default units;