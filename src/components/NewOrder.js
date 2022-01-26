import { BADQUERY } from 'dns'
import React, { Component } from 'react'
import { Tabs, Tab } from 'react-bootstrap'
import https from 'https'
import crypto from 'crypto'
//const https = require('https');
//const crypto = require('crypto');


const showForm = () => {
    return(
      <Tabs defaultActiveKey="buy" className="bg-dark text-white">
  
        <Tab eventKey="buy" title="Buy" className="bg-dark">
  
            <form onSubmit={(event) => {
              event.preventDefault()
              //makeBuyOrder(dispatch, exchange, token, web3, buyOrder, account)
              Buy()
            }}>
            <div className="form-group small">
            
              <label>Buy Amount (dummy values)</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm bg-dark text-white"
                  placeholder="Buy Amount"
                  onChange={(e) =>  console.log('Buy Amount: ', e.target.value)
                //console.log('form 2 sumbitted')
                }
                  required
                />
              </div>
            </div>
            <div className="form-group small">
              <label>Buy Price (dummy values)</label>
              <div className="input-group">
                <input
                  type="text"
                  className="form-control form-control-sm bg-dark text-white"
                  placeholder="Buy Price"
                  onChange={//(e) => dispatch( buyOrderPriceChanged( e.target.value ) )
                    console.log('form 3 sumbitted')
                }
                  required
                />
              </div>
            </div>
            <button type="submit" className="btn btn-primary btn-sm btn-block">Buy Order</button>
            {// showBuyTotal ? <small>Total: {buyOrder.amount * buyOrder.price} ETH</small> : null 
            <h5>Total: </h5>
            }
          </form>
  
        </Tab>
  
        <Tab eventKey="sell" title="Sell" className="bg-dark">
  
          <form onSubmit={(event) => {
            event.preventDefault()
            //makeSellOrder(dispatch, exchange, token, web3, sellOrder, account)
            console.log('form  4sumbitted')
          }}>
          <div className="form-group small">
            <label>Buy Sell (dummy values)</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm bg-dark text-white"
                placeholder="Sell amount"
                onChange={//(e) => dispatch( sellOrderAmountChanged( e.target.value ) )
                console.log('form 4 sumbitted')
                }
                required
              />
            </div>
          </div>
          <div className="form-group small">
            <label>Sell Price (dummy values)</label>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-sm bg-dark text-white"
                placeholder="Sell Price"
                onChange={//(e) => dispatch( sellOrderPriceChanged( e.target.value ) )
                console.log('form  6 sumbitted')
                }
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-sm btn-block">Sell Order</button>
          {// showSellTotal ? <small>Total: {sellOrder.amount * sellOrder.price} ETH</small> : null 
          <h3>Total: </h3>
          }
        </form>
  
        </Tab>
      </Tabs>
    )
  }

function NewOrder() {

 


  return (
    <div className="card bg-dark text-white">
    <div className="card-header">
      New Order
    </div>
    <div className="card-body">
      {showForm()}
    </div>
  </div>
    
  );
  
}

function Buy() {

    //trade-am.oslsandbox.com
  //const host = ''
//const key = 'cf3ec38b-9f37-4f45-b8b9-780381005fc6'
//const secret = '51mSmwwUX2/CU1uL62TLiLNr5K6lTSU4FgEtSabe/pYy61VBY0iyUN79ds8AA9HAo1KGgz2tCPe8dYhLrWLV3w=='

    const host = 'trade-am.osl.com';
    const key = '262a8c44-c16d-443a-81c3-6bdb374604dc';
    const secret = 'LrqdScibZdS7AqzZIRKzBbjNPwFeAVDrYZb+A/Z2vW9FzGaDeFnS7bLGxD8U4qjwc07wYxJPx/5X4PQaR/wqTA==';
  function response_as_json(resolve, reject) {
      return function(res) {
        let str = '';
        res.on('data', function (chunk) { str += chunk; });
        res.on('end', function (arg) {
          
          //info = JSON.parse(str)
          //infos = info[0].askPrice
          
          //console.log('ask price:', info[0].askPrice);
          //console.log('bid price:',info[0].bidPrice);
          //console.log('currency:',info[0].currency);
          //console.log('last price:',info[0].lastPrice);
          //console.log('maxOrderQty:',info[0].maxOrderQty);
          //console.log('minOrderQty:',info[0].minOrderQty);
          //console.log('price decimals:',info[0].priceDecimals);
          //console.log('quantity decimals:',info[0].quantityDecimals);
          //console.log('update time:',info[0].updateTime);
          console.log('Buy Function Run');

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
      const order_id_v4 = (await v4_mk_request('POST', '/api/v4/order', {
        'ordType': 'Market',
        'symbol': 'BTCUSD',
        'orderQty': '0.001',
        //'price': '39000',
        'side': 'Buy'
      }))['orderID'];
      await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
      //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
      //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
    }
    
    run();
    console.log("end of function")

} 

function Sell() {

    //trade-am.oslsandbox.com
  //const host = ''
//const key = 'cf3ec38b-9f37-4f45-b8b9-780381005fc6'
//const secret = '51mSmwwUX2/CU1uL62TLiLNr5K6lTSU4FgEtSabe/pYy61VBY0iyUN79ds8AA9HAo1KGgz2tCPe8dYhLrWLV3w=='
    const host = 'trade-am.osl.com';
    const key = '262a8c44-c16d-443a-81c3-6bdb374604dc';
    const secret = 'LrqdScibZdS7AqzZIRKzBbjNPwFeAVDrYZb+A/Z2vW9FzGaDeFnS7bLGxD8U4qjwc07wYxJPx/5X4PQaR/wqTA==';

  function response_as_json(resolve, reject) {
      return function(res) {
        let str = '';
        res.on('data', function (chunk) { str += chunk; });
        res.on('end', function (arg) {
          
          //info = JSON.parse(str)
          //infos = info[0].askPrice
          
          //console.log('ask price:', info[0].askPrice);
          //console.log('bid price:',info[0].bidPrice);
          //console.log('currency:',info[0].currency);
          //console.log('last price:',info[0].lastPrice);
          //console.log('maxOrderQty:',info[0].maxOrderQty);
          //console.log('minOrderQty:',info[0].minOrderQty);
          //console.log('price decimals:',info[0].priceDecimals);
          //console.log('quantity decimals:',info[0].quantityDecimals);
          //console.log('update time:',info[0].updateTime);
          console.log('Buy Function Run');

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
      const order_id_v4 = (await v4_mk_request('POST', '/api/v4/order', {
        'ordType': 'Market',
        'symbol': 'BTCUSD',
        'orderQty': '0.001',
        //'price': '39000',
        'side': 'Sell'
      }))['orderID'];
      await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
      //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
      //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
    }
    
    run();
    console.log("end of function")

} 


export default NewOrder;

/*
const showForm = (props) => {
    const {
      dispatch,
      buyOrder,
      exchange,
      token,
      web3,
      account,
      sellOrder,
      showBuyTotal,
      showSellTotal
    } = props

*/