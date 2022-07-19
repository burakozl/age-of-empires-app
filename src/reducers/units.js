
const initialState = {
    units: [],
    status: "idle",
    loading: false,
    error: null,
}

const units = (state = initialState, action) => {
    switch (action.type) {
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
                filterByWoodGold: action.units.filter(item => (
                    item.cost !== null && item.cost.Wood && item.cost.Gold ? "Wood :" + item.cost.Wood + ", Gold :" + item.cost.Gold : "")),
                filterByWoodFood: action.units.filter(item => (
                    item.cost !== null && item.cost.Wood && item.cost.Food ? "Wood :" + item.cost.Wood + ", Food :" + item.cost.Food : "")),
                filterByFoodGold: action.units.filter(item => (
                    item.cost !== null && item.cost.Food && item.cost.Gold ? "Food :" + item.cost.Food + ", Gold :" + item.cost.Gold : "")),
                filterByWoodFoodGold: action.units.filter(item => (
                    item.cost !== null && item.cost.Wood && item.cost.Food && item.cost.Gold ? "Wood :" + item.cost.Wood + ", Food :" + item.cost.Food + ", Gold :" + item.cost.Gold : "")),
            };

        case "GET_UNITS_FAILED":
            return { ...state, loading: false, error: action.message, status: 'failed' };
        default:
            return state;
    }
};

export default units;