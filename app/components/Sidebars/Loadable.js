/**
 *
 * Asynchronously loads the component for Sidebars
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
