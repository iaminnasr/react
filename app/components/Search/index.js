/**
 *
 * Search
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import { Row, Col, Input } from 'antd';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const { Search } = Input;

function Searchbar(props) {
  return (
    <div>
      {/* <FormattedMessage {...messages.header} /> */}
      <Search
        className="mr-5 mt-3 searchbar "
        placeholder={`جستجو در همه ${props.plceholder.name}`}
        onSearch={value => console.log(value)}
        style={{ width: 500, height: 40 }}
      />
    </div>
  );
}

Search.propTypes = {};

export default memo(Searchbar);
