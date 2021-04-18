import * as actionTypes from '../ActionTypes';

export const selectDrawerActions = (payload) => async (dispatch, getState) => {
  return dispatch(actionTypes.selectDrawerSuccess(payload));
};
