import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import Spinner from './Spinner'


const timestamp = '8:00:00 pm 01/25/22'
const price = 35000
const quantity = 0.1
const color = 'GREEN'
const sign = '+'
const id = 1

const showMyFilledOrders = () => {
    return(
       <tbody>
                <tr key={id}>
                    <td className="text-muted">{timestamp}</td>
                    <td className={`text-${color}`}>{sign}{quantity}</td>
                    <td className={`text-${color}`}>{quantity}</td>
                 </tr>
        </tbody>
       )
}

const showMyOpenOrders = () => {

  return(
    <tbody>
      
        return (
          <tr key={id}>
            <td className={`text-${color}`}>{quantity}</td>
            <td className={`text-${color}`}>{price}</td>  
            <td
              className="text-muted cancel-order"
              onClick={(e) => {
                //cancelOrder(dispatch, exchange, order, account)
                console.log('cancel order')
              }}
            >X</td>
          </tr>
        )
     
    </tbody>
  )
}

class MyTransactions extends Component {
  render() {
    return (
      <div className="card bg-dark text-white">
        <div className="card-header">
          My Transactions
        </div>
        <div className="card-body">
          <Tabs defaultActiveKey="trades" className="bg-dark text-white">
            <Tab eventKey="trades" title="Trades" className="bg-dark">
              <table className="table table-dark table-sm small">
                <thead>
                  <tr>
                    <th>Time</th>
                    <th>DAPP</th>
                    <th>DAPP/ETH</th>
                  </tr>
                </thead>
                { this.props.showMyFilledOrders ? showMyFilledOrders(this.props) : //<Spinner type="table" />
                console.log('no table info')
                }
              </table>
            </Tab>
            <Tab eventKey="orders" title="Orders">
              <table className="table table-dark table-sm small">
                <thead>
                  <tr>
                    <th>Amount</th>
                    <th>DAPP/ETH</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                { this.props.showMyOpenOrders ? showMyOpenOrders(this.props) : <Spinner type="table" />}
              </table>
            </Tab>
          </Tabs>
        </div>
      </div>
    )
  }
}


export default MyTransactions;
