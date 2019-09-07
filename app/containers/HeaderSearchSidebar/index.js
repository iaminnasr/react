/**
 *
 * HeaderSearchSidebar
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import { Row, Col } from 'antd';
import makeSelectHeaderSearchSidebar from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';


import Searchbar from '../../components/Search';
import HeaderSidebar from '../../components/HeaderSidebar';

import state from './data';
import img from './slide/slide.png';
import './slider.css';

export function HeaderSearchSidebar() {
  useInjectReducer({ key: 'headerSearchSidebar', reducer });
  useInjectSaga({ key: 'headerSearchSidebar', saga });

  return (
    <div>
      <Helmet>
        <title>HeaderSearchSidebar</title>
        <meta name="description" content="Description of HeaderSearchSidebar" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Row
        className="styleslider"
        style={{
          backgroundImage: state.image_header,
        }}
      >
        <Col span={6}>
          <HeaderSidebar HeaderSidebar={state.heder_sidebar} />
        </Col>
        <Col span={18} className="text-right">
          <Searchbar plceholder={state.placeholder_search} />
        </Col>
      </Row>
    </div>
  );
}

HeaderSearchSidebar.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  headerSearchSidebar: makeSelectHeaderSearchSidebar(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HeaderSearchSidebar);
