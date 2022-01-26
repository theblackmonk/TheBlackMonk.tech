import React, { Component, useState, useEffect } from 'react'
import { render } from 'react-dom'
import { Tabs, Tab } from 'react-bootstrap'
import Spinner from './Spinner'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import https from 'https'
import crypto from 'crypto'

//const https = require('https');
//const crypto = require('crypto');

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

  

  async function Buy() {

    
    const host = 'trade-am.osl.com';
    const key = '262a8c44-c16d-443a-81c3-6bdb374604dc';
    const secret = 'LrqdScibZdS7AqzZIRKzBbjNPwFeAVDrYZb+A/Z2vW9FzGaDeFnS7bLGxD8U4qjwc07wYxJPx/5X4PQaR/wqTA==';
    function response_as_json(resolve, reject) {
        return function(res) {
          let str = '';
          res.on('data', function (chunk) { str += chunk; });
          res.on('end', function (arg) {

            ((res.statusCode >= 200 && res.statusCode < 300) ? resolve : reject)(str ? JSON.parse(str) : '');
          });
        }
      }
      
      function gen_sig_helper(secret, data) {
        const secret_bytes = Buffer.from(secret, 'base64');
        return crypto.createHmac('sha512', secret_bytes).update(data).digest('base64');
      }
      
      function v4_gen_sig(secret, method, path, expires, body_str) {
        let data = method + path + expires;
        if (body_str) {
          data = data + body_str;
        }
        return gen_sig_helper(secret, data);
      }
      
      function v4_mk_request(method, path, body) {
        console.log(`=> ${method} ${path}`);
        return new Promise((resolve, reject) => {
          const tonce = Math.floor(Date.now() / 1000) + 10;
          const body_str = JSON.stringify(body);
          const headers = {
            'api-key': key,
            'api-signature': v4_gen_sig(secret, method, path, tonce, body_str),
            'api-expires': tonce,
            'Content-Type': 'application/json'
          }
          if (body) {
            headers['Content-Length'] = Buffer.byteLength(body_str);
          }
          const opt = { host, method, path, headers };
          const req = https.request(opt, response_as_json(resolve, reject));
          if (body) {
            req.write(body_str);
          }
          req.end();
        });
      }
      
      async function run() {
        /*const order_id_v4 = (await v4_mk_request('POST', '/api/v4/order', {
          'ordType': 'Market',
          'symbol': 'BTCUSD',
          'orderQty': '0.001',
          //'price': '39000',
          'side': 'Buy'
        }))['orderID'];*/
        //await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
        //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
        //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
        //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
      }
      
      //run();
      console.log("end of function")

} 

export default Balance;

/*
<div className="card-body">
    {this.props.showForm ? showForm(this.props) : <Spinner />}
</div>
*/