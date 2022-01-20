import React from 'react';
import HeroSection from '../Homepage/HeroSection';
import { aboutObjOne, aboutObjTwo, aboutObjThree, aboutObjFour } from './Data';
import Projects from '../Projects';
import ComingSoon from '../../ComingSoon';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MT6.css';
import { Form } from 'react-bootstrap';
const https = require('https');
const crypto = require('crypto');
//import '../Homepage/HeroSection.css';

function MT6() {
  return (
    <>
      <h1 className='head'>Meta Trader 6</h1>
        <Card className='card'>
          <Card.Img variant="top" src="images/fin.jpg" className='top' />
            
            
            <Card.Body>
              <Button onClick={Buy}>Buy</Button>
              <br />
              <br />
              <Button>Sell</Button>
              <>
              
              <br />
              <br />
              <Form.Control type="text" placeholder="Normal text" />
              </>
                
            </Card.Body>
        </Card>
      
      <HeroSection {...aboutObjTwo} />
      <HeroSection {...aboutObjOne} />
      <Projects />

    </>
  );
}

function Buy() {
    
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
        await v4_mk_request('DELETE', '/api/v4/order', {'orderID': [order_id_v4]});
      
      }
      
      run();
      console.log("success")

}

export default MT6;

/*
<Card.Text className='body'>
    <Card.Title className='top-line'>Behind the name</Card.Title>
        In the TV show Dragon Ball Z, Goku enters the Hyperbolic Time Chamber.
        Facing an alien invader that is too powerful, Goku stays in the chamber to train and get stronger. One year inside the time chamber is
        one day to everyone outside and allows you to make one year's progress in one day.
        The environment inside has ten times the gravity of earth and is completely empty and devoid of distractions. 
    </Card.Text>
    <Card.Text className='body'>Focus is nothing more than the absence of distraction.
        Monk life is minimal, simple, routine, and therefore hyper-focused.
        Which allows a monk, or a group of monks to achieve a specific goal in less time.
    </Card.Text>
    <Card.Text className='body'>

    </Card.Text>
        <Card.Text className='body'>Being the first monk programmer, I had to come up with a unique title.
            Hence, TheBlackMonk.
</Card.Text>

*/