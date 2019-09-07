/**
 *
 * Home
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
import makeSelectHome from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Header from '../../components/Header';

import state from './data';

import 'antd/dist/antd.css';
import 'antd/dist/bootstrap.css';
import { HeaderSearchSidebar } from '../HeaderSearchSidebar';
import Cards from '../../components/Cards';
import Sidebars from '../../components/Sidebars';
import { ratechangeaction } from './actions';
import './Home.css';

export function Home({ dispatch, date }) {
  useInjectReducer({ key: 'home', reducer });
  useInjectSaga({ key: 'home', saga });
  const ratechange = (e, id) => dispatch(ratechangeaction(e, id));

  return (
    <div>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="Description of Home" />
      </Helmet>
      {/* <FormattedMessage {...messages.header} /> */}
      <Header head={state.header} />
      <HeaderSearchSidebar />

      <Row>
        <Col span={20}>
          <div className="gridcontainer">
            {state.prouducts.map(item => (
              <div>
                <Cards products={item} onratechange={ratechange} />
              </div>
            ))}
          </div>
        </Col>
        <Col span={4}>
          <Sidebars sidebar={state.sidebar} />
        </Col>
      </Row>
      <div>
        <pre>{JSON.stringify(date.rate, undefined, 1)}</pre>
      </div>
    </div>
  );
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  date: makeSelectHome(),
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
)(Home);
