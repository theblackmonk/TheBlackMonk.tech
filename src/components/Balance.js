import React, { Component, useState, useEffect } from 'react'
import { render } from 'react-dom'
import { Tabs, Tab } from 'react-bootstrap'
import Spinner from './Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import https from 'https'
import crypto from 'crypto'


const exchangeBalance = 10
const portfolioBalance = 200



const showForm = () => {
  
  
  
  return (
    <Tabs defaultActiveKey="deposit" className="bg-dark text-white">

      <Tab eventKey="deposit" title="Deposit" className="bg-dark">
        <table className="table table-dark table-sm small">
          <thead>
            <tr>
              <th>Token</th>
              <th>Wallet</th>
              <th>Exchange</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH</td>
              <td>{exchangeBalance}</td>
              <td>{portfolioBalance}</td>
            </tr>
          </tbody>
        </table>

        <form className="row" onSubmit={(event) => {
          event.preventDefault()
          //depositEther(dispatch, exchange, web3, etherDepositAmount, account)
          //alert('button clicked')
        }}>
          <div className="col-12 col-sm pr-sm-2">
            <input
            type="text"
            placeholder="Amount"
            onChange={//(e) => dispatch( etherDepositAmountChanged(e.target.value) ) 
            //alert('button clicked')
            console.log('hello')
            }
            className="form-control form-control-sm bg-dark text-white"
            required />
          </div>
          <div className="col-12 col-sm-auto pl-sm-0">
            <button type="submit" className="btn btn-primary btn-block btn-sm">Deposit</button>
          </div>
        </form>

        <table className="table table-dark table-sm small">
          <tbody>
            <tr>
              <td>DAPP</td>
              <td>{exchangeBalance}</td>
              <td>{portfolioBalance}</td>
            </tr>
          </tbody>
        </table>

        <form className="row" onSubmit={(event) => {
          event.preventDefault()
          //depositToken(dispatch, exchange, web3, token, tokenDepositAmount, account)
          //alert('button clicked')
        }}>
          <div className="col-12 col-sm pr-sm-2">
            <input
            type="text"
            placeholder="DAPP Amount"
            onChange={//(e) => dispatch( tokenDepositAmountChanged(e.target.value) )
            //alert('button clicked')
            console.log('hello')
            }
            className="form-control form-control-sm bg-dark text-white"
            required />
          </div>
          <div className="col-12 col-sm-auto pl-sm-0">
            <button type="submit" className="btn btn-primary btn-block btn-sm">Deposit</button>
          </div>
        </form>

      </Tab>

      <Tab eventKey="withdraw" title="Withdraw" className="bg-dark">

        <table className="table table-dark table-sm small">
          <thead>
            <tr>
              <th>Token</th>
              <th>Wallet</th>
              <th>Exchange</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ETH</td>
              <td>{exchangeBalance}</td>
              <td>{portfolioBalance}</td>
            </tr>
          </tbody>
        </table>

        <form className="row" onSubmit={(event) => {
          event.preventDefault()
          //withdrawEther(dispatch, exchange, web3, etherWithdrawAmount, account)
          //alert('button clicked')
        }}>
          <div className="col-12 col-sm pr-sm-2">
            <input
            type="text"
            placeholder="ETH Amount"
            onChange={//(e) => dispatch( etherWithdrawAmountChanged(e.target.value) )
            //alert('button clicked')
            console.log('hello')
            }
            className="form-control form-control-sm bg-dark text-white"
            required />
          </div>
          <div className="col-12 col-sm-auto pl-sm-0">
            <button type="submit" className="btn btn-primary btn-block btn-sm">Withdraw</button>
          </div>
        </form>

        <table className="table table-dark table-sm small">
          <tbody>
            <tr>
              <td>DAPP</td>
              <td>{exchangeBalance}</td>
              <td>{portfolioBalance}</td>
            </tr>
          </tbody>
        </table>

        <form className="row" onSubmit={(event) => {
          event.preventDefault()
          //withdrawToken(dispatch, exchange, web3, token, tokenWithdrawAmount, account)
          //alert('button clicked')
        }}>
          <div className="col-12 col-sm pr-sm-2">
            <input
            type="text"
            placeholder="DAPP Amount"
            onChange={//(e) => dispatch( tokenWithdrawAmountChanged(e.target.value) )
            //alert('button clicked')
            console.log('hello')
            }
            className="form-control form-control-sm bg-dark text-white"
            required />
          </div>
          <div className="col-12 col-sm-auto pl-sm-0">
            <button type="submit" className="btn btn-primary btn-block btn-sm">Withdraw</button>
          </div>
        </form>

      </Tab>
    </Tabs>
  )

}




function Balance() {
  
    //useState() //pass in default state. useState always returns an array with two values [current state, function that lets us update state]
   

      return (
        <div className="card bg-dark text-white">
          <div className="card-header">
            Balance (adding soon)
          </div>
          <div className="card-body">
          
          
          <Button >Get Balance</Button>
          
          
          
          </div>
        </div>
      )
    
  }

export default Balance;

/*
<div className="card-body">
    {this.props.showForm ? showForm(this.props) : <Spinner />}
</div>
*/