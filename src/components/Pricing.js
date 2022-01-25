import React, { Component, useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

const https = require('https');
const crypto = require('crypto');

var one, two, three, four, five, six
let info

GrabPrice();

function Pricing() {
    let [ones, setOnes] = useState()
    let [twos, setTwos] = useState()
    let [threes, setThrees] = useState()
    let [fours, setFours] = useState()

    const MINUTE_MS = 1500;

    useEffect(() => {
      const interval = setInterval(() => {
        GrabPrice()
        update()
        console.log('running')
      }, MINUTE_MS);
    
      return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
    }, [])

    function update() {
        one = info[0].askPrice
        two = info[0].bidPrice
        three = info[0].lastPrice
        four = info[0].updateTime

        setOnes(ones = one)
        setTwos(twos = two)
        setThrees(threes = three)
        setFours(fours = four)
        //setCount(prevCount => prevCount -1)
        //console.log(infos = extra)
      }

    
  return (
    <div className="card bg-dark text-white">
        <div className="card-header">
            OSL Pricing
        </div>
        <div className="card-body">
            <table className="table table-dark table-sm small">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Content</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Ask Price:</td>
                        <td>{ones}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Bid Price:</td>
                        <td>{twos}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Last Price:</td>
                        <td>{three}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Update Time:</td>
                        <td>{four}</td>
                    </tr>
                </tbody>
                {// this.props.filledOrdersLoaded ? showFilledOrders(this.props.filledOrders) : <Spinner type="table" />
                
                }
            </table>
            
            
          
          
        </div>
    </div>
  )
  
}

/*
<p>Ask Price: {ones} </p>
          <p>Bid Price: {twos} </p>
          <p>Last Price: {threes} </p>
          <p>updateTime: {fours} </p>
*/

async function GrabPrice() {

    
    const host = 'trade-am.osl.com';
    const key = '262a8c44-c16d-443a-81c3-6bdb374604dc';
    const secret = 'LrqdScibZdS7AqzZIRKzBbjNPwFeAVDrYZb+A/Z2vW9FzGaDeFnS7bLGxD8U4qjwc07wYxJPx/5X4PQaR/wqTA==';
    function response_as_json(resolve, reject) {
        return function(res) {
          let str = '';
          res.on('data', function (chunk) { str += chunk; });
          res.on('end', function (arg) {
            
            info = JSON.parse(str)
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
        /*const order_id_v4 = (await v4_mk_request('POST', '/api/v4/order', {
          'ordType': 'Market',
          'symbol': 'BTCUSD',
          'orderQty': '0.001',
          //'price': '39000',
          'side': 'Buy'
        }))['orderID'];*/
        //await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
        //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
        await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
        //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
      }
      
      run();
      console.log("end of function")

} 

export default Pricing;