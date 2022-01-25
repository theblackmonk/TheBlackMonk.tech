import React, { Component } from 'react'
import TradeViewChart from "react-crypto-chart";


class PriceChart extends Component {
  
render() {
  return (
    <TradeViewChart pair="BTCBUSD" />
  );
  }
}



export default PriceChart;