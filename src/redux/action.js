export const SELECT_IMAGE = "SELECT_IMAGE";
export const SET_SELECTED_COMPANY = "SET_SELECTED_COMPANY";
export const SET_SELECTED_MODEL = "SET_SELECTED_MODEL";

export const selectImage = (imageUrl) => ({
  type: SELECT_IMAGE,
  payload: imageUrl,
});

export const setSelectedCompany = (company) => ({
  type: SET_SELECTED_COMPANY,
  payload: company,
});

export const setSelectedModel = (model) => ({
  type: SET_SELECTED_MODEL,
  payload: model,
});
