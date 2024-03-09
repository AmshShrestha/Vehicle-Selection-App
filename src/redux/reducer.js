import { SELECT_IMAGE } from "./action";
import { SET_SELECTED_COMPANY, SET_SELECTED_MODEL } from './action';

const initialState = {
  selectedImage: null,
  selectedCompany: '',
  selectedModel: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_IMAGE:
      return {
        ...state,
        selectedImage: action.payload,
      };
    case SET_SELECTED_COMPANY:
      return {
        ...state,
        selectedCompany: action.payload,
        selectedModel: '',
      };
    case SET_SELECTED_MODEL:
      return {
        ...state,
        selectedModel: action.payload,
      };
    default:
      return state;
  }
};


export default reducer;
