/*
 *
 * Home reducer
 *
 */
import produce from 'immer';
import { RATE_CHANGE_ACTION } from './constants';
import data from './data';
export const initialState = data;

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case RATE_CHANGE_ACTION:
        draft.rate.id = action.id;
        draft.rate.value = action.rate;
        break;
    }
  });

export default homeReducer;
