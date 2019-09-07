/**
 *
 * Sidebars
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { Card } from 'antd';
import messages from './messages';
import img from './border-sidebar.svg';

function Sidebars(props) {
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <Card>
        <p className="text-center">همه آگهی ها</p>
        {props.sidebar.map(item => (
          <ul>
            <li className="list-unstyled border-bottom text-right text-decoration-none m-auto">
              <i
                className="material-icons ml-3"
                style={{ color: item.color, width: 23 }}
              >
                {item.icon}
              </i>

              <NavLink className="text-decoration-none align-top">
                {item.name}
              </NavLink>
            </li>
          </ul>
        ))}
      </Card>
    </div>
  );
}

Sidebars.propTypes = {};

export default memo(Sidebars);
