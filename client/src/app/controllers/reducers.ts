import { Reducer } from "redux";

export interface AppState {
  searchTerm: string;
}

const initialState: AppState = {
  searchTerm: "",
};

const rootReducer: Reducer<AppState> = (state = initialState, action) => {
  switch (action.type) {
    case "SET_SEARCH_TERM":
      return { ...state, searchTerm: action.searchTerm };
    default:
      return state;
  }
};

export default rootReducer;