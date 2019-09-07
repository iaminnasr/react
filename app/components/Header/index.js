/**
 *
 * Header
 *
 */

import React, { memo } from 'react';
import { Row, Col, Button, Icon } from 'antd';
import 'antd/dist/antd.css';
import 'antd/dist/bootstrap.css';

// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './header.css';

function Header(props) {
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <Row className="header-row">
        <Col span={6}>
          <span className="mx-2 menu">
            <Icon type="download" />
            <a>دانلود اپلیکیشن</a>
          </span>
          <Button type="primary" className="mx-2">
            ثبت رایگان آگهی
          </Button>
        </Col>
        <Col span={18}>
          {props.head.map(item => (
            <a href="8" key={item.id} className="menu text-dark">
              {`${item.name} `}
            </a>
          ))}
        </Col>
      </Row>
    </div>
  );
}

Header.propTypes = {};

export default memo(Header);
