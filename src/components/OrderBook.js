import React, { Component } from 'react'


class OrderBook extends Component {
  
    render() {
  return (
      <div className="vertical">
        <div className="card bg-dark text-white">
          <div className="card-header">
            Order Book
          </div>
          <div className="card-body order-book">
            <table className="table table-dark table-sm small"> 
            
              {// this.props.showOrderBook ? showOrderBook(this.props) : <Spinner type='table' /> 
              <h3>Order Book</h3>
              }
            </table>
          </div>
        </div>
      </div>
  );
  }
}

export default OrderBook;