/*
 *
 * Home actions
 *
 */

import { RATE_CHANGE_ACTION } from './constants';

export function ratechangeaction(rate, id) {
  return {
    type: RATE_CHANGE_ACTION,
    rate,
    id,
  };
}
