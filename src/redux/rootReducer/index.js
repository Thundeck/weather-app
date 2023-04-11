import * as actions from "../actionTypes";

const initialState = {
  cities: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_CITY:
      return {
        ...state,
        cities:[...state.cities,action.payload]
      };
    case actions.DELETE_CITY:
      return {
        ...state,
        cities:action.payload
      };

    default:
      return state

  }
};

export default rootReducer;

