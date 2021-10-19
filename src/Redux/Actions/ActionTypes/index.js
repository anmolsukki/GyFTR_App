import * as actionConstant from '../ActionConstant';

export const selectDrawerSuccess = (payload) => ({ type: actionConstant.SELECT_DRAWER_SUCCESS, payload });

export const persistSuccess = (payload) => ({ type: actionConstant.PERSIST_SUCCESS, payload });
