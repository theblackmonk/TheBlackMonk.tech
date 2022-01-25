import React, { Component } from 'react'


class Trades extends Component {
  
    render() {
  return (
    <div className="card bg-dark text-white">
        <div className="card-header">
            Past Trades
        </div>
        <div className="card-body">
            <table className="table table-dark table-sm small">
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>TBM</th>
                        <th>TBM/ETH</th>
                    </tr>
                </thead>
                {// this.props.filledOrdersLoaded ? showFilledOrders(this.props.filledOrders) : <Spinner type="table" />
                <h3>Trades</h3>
                }
            </table>
        </div>
    </div>
  );
  }
}

export default Trades;