/**
 *
 * Cards
 *
 */

import React, { memo, Component } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import { Card, Icon, Rate } from 'antd';
import messages from './messages';
import './cards.css';

const { Meta } = Card;

class Cards extends Component {
  ratechange = e => {
    this.props.onratechange(e, this.props.products.id);
  };

  render() {
    return (
      <div>
        {/* <FormattedMessage {...messages.header} /> */}

        <div
          key={this.props.products.id}
          className="card shadow-sm text-right border-rad border-bottom-radius cardchange"
        >
          <a>
            <span className="badgeoff">{this.props.products.off}%</span>
            <img
              src={this.props.products.img}
              className="card-img-top imagecard"
              alt="..."
            />
          </a>
          <div className="card-body">
            <h5 className="card-title">{this.props.products.name}</h5>
            <p className="text-muted ">لحظاتی پیش</p>
            <p className="card-text">قیمت:{this.props.products.price} تومان</p>
            <div className="justify-content-between d-flex">
              <span>
                <Rate
                  defaultValue={this.props.products.rate}
                  className="rate"
                  onChange={this.ratechange}
                />
              </span>
              <span>
                <span>
                  <a className="text-danger mr-1">
                    <i className="material-icons icon-font">verified_user</i>
                  </a>
                </span>
                <span>
                  <a className="text-primary mr-1">
                    <i className="material-icons icon-font">email</i>
                  </a>
                </span>
                <span>
                  <a className="text-success mr-1">
                    <i className="material-icons icon-font">phone_forwarded</i>
                  </a>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Cards.propTypes = {};

export default Cards;
