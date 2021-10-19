import * as actionConstant from '../../Actions/ActionConstant';

const initialState = {
  drawerStore: 'Home',
  persistStore: null,
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.SELECT_DRAWER_SUCCESS:
      return {
        ...state,
        drawerStore: action.payload,
      };

    case actionConstant.PERSIST_SUCCESS:
      return {
        ...state,
        persistStore: action.payload,
      };
    default:
  }
  return state;
};
