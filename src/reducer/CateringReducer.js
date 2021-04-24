let INITIAL_STATE = {
  dataCatering: [],
  dataDate: [],
};

const cateringReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_DATA_CATERING":
      return {
        ...state,
        dataCatering: action.payload,
      };
    case "GET_DATA_DATE":
      return {
        ...state,
        dataDate: action.payload,
      };
    default:
      return state;
  }
};

export default cateringReducer;
