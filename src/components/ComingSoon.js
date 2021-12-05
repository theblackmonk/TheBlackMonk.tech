import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from './Button';
import './ComingSoon.css';

//lightBg, topLine, lightText, lightTextDesc, headline, description,
//buttonLabel, img, alt, imgStart

function ComingSoon({
}) {
    return (
            <>
            <div className='soon-section soonBg'>
                <div className="sooncontainer">
                    <div className="soon-row"
                    style={{display: 'flex', flexDirection: 'row'}}>
                      <div className='column'>
                          <div className='soon-text-wrapper'>
                              
                                <h1 className='heading'>Coming Soon</h1>
                                <div className='top-line'>patience is a virtue</div>
                                <Link to='/'>
                                    <Button buttonSize='btn--wide' buttonColor='blue'>
                                        Back Home
                                    </Button>
                                </Link>
                                
                          </div>
                      </div>
                      <div className='column'>
                        <div className='soon-img-wrapper'>
                            <img src='images/suit-3.png' className='soon-img' />
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ComingSoon
