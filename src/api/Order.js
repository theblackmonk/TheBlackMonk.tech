import https from 'http'
import crypto from 'crypto'

//const https = require('https');
//const crypto = require('crypto');

const host = 'trade-am.oslsandbox.com';
const key = 'cf3ec38b-9f37-4f45-b8b9-780381005fc6';
const secret = '51mSmwwUX2/CU1uL62TLiLNr5K6lTSU4FgEtSabe/pYy61VBY0iyUN79ds8AA9HAo1KGgz2tCPe8dYhLrWLV3w==';

function response_as_json(resolve, reject) {
  return function(res) {
    let str = '';
    res.on('data', function (chunk) { str += chunk; });
    res.on('end', function (arg) {
      console.log(JSON.parse(str));
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
    'ordType': 'Limit',
    'symbol': 'BTCUSD',
    'orderQty': '0.1',
    'price': '39000',
    'side': 'Buy'
  }))['orderID'];
  await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
  //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
  //await v4_mk_request('GET', '/api/v4/order?orderID=' + order_id_v4);
  //await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
  //await v4_mk_request('POST', '/api/v4/order', {'ordType': 'Limit', 'symbol': 'BTCUSD','orderQty': '0.001','price': '38900','side': 'Buy',})['orderID'];
  //await v4_mk_request('GET', '/api/v4/instrument?symbol=BTCUSD');
  //await v4_mk_request('GET', '/api/2/BTCUSD/MONEY/TICKER') //24 hour high 24 hour low #last price
  //await v4_mk_request('POST', '/api/3/ACCOUNT');

}

run();