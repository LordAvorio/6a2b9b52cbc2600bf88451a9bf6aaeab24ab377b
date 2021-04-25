let INITIAL_STATE = {
  dataCatering: [],
  dataDate: [],
  pickedDay: "",
  pickedTypeFood: "",
  pickedDate: "",
  triggerModalLocation: "False",
  triggerModalCart: "False",
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
    case "GET_PICKED_TYPE_FOOD":
      return {
        ...state,
        pickedTypeFood: action.payload,
      };
    case "GET_PICKED_DATE":
      return {
        ...state,
        pickedDate: action.payload,
      };
    case "GET_PICKED_DAY":
      return {
        ...state,
        pickedDay: action.payload,
      };
    case "TRIGGER_MODAL_LOCATION":
      return {
        ...state,
        triggerModalLocation: action.payload,
      };
    case "TRIGGER_MODAL_CART":
      return {
        ...state,
        triggerModalCart: action.payload,
      };
    default:
      return state;
  }
};

export default cateringReducer;
