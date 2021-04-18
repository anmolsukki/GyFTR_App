import * as actionConstant from '../../Actions/ActionConstant';

const initialState = {
  drawerStore: 'Home',
};

export const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionConstant.SELECT_DRAWER_SUCCESS:
      return {
        ...state,
        drawerStore: action.payload,
      };
    default:
  }
  return state;
};
