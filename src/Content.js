import React, { Component } from 'react'
import Pricing  from './components/Pricing' 
import Balance from './components/Balance'
import NewOrder from './components/NewOrder'
import OrderBook from './components/OrderBook'
//import PriceChart from './components/PriceChart'
import MyTransactions from './components/MyTransactions'
import { run } from './api/Auth'
import PriceChart from './components/PriceChart'

class Content extends Component {
    Auth
  render() {
  return (
    <div className="content">
              <div className="vertical-split">
                <Balance />
                <NewOrder />
                
              </div>
            <OrderBook />
            <div className="vertical-split">
                <PriceChart />
                <MyTransactions />
            </div>
        <Pricing />
      </div>
  );
  }
}

export default Content;