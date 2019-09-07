/**
 *
 * HeaderSidebar
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { FormattedMessage } from 'react-intl';
import { Button } from 'antd';
import messages from './messages';
import './headersidebar.css';

function HeaderSidebar(props) {
  return (
    <div style={{ backgroundColor: 'rgba(0,0,0,0.2)' }}>
      {/* <FormattedMessage {...messages.header} /> */}
      {props.HeaderSidebar.map(item => (
        <NavLink key={item.id} to={item.name}>
          <p className="border-bottom text-center text-warning w-50 mb-1 mt-1 m-auto">
            <Button className="text-warning sidebutton" type="link">
              {item.name}
            </Button>
          </p>
        </NavLink>
      ))}
    </div>
  );
}

HeaderSidebar.propTypes = {};

export default memo(HeaderSidebar);
