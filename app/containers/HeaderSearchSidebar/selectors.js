import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the headerSearchSidebar state domain
 */

const selectHeaderSearchSidebarDomain = state =>
  state.headerSearchSidebar || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HeaderSearchSidebar
 */

const makeSelectHeaderSearchSidebar = () =>
  createSelector(
    selectHeaderSearchSidebarDomain,
    substate => substate,
  );

export default makeSelectHeaderSearchSidebar;
export { selectHeaderSearchSidebarDomain };
