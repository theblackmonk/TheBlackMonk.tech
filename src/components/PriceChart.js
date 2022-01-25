import React, { Component } from 'react'
import TradeViewChart from "react-crypto-chart";

let pair = 'BTCBUSD'
class PriceChart extends Component {
  
render() {
  return (
    

    <TradeViewChart pair={pair} />

  
  );
  }
  
}

function Change() {
pair = 'ETHBUSD'

}


export default PriceChart;