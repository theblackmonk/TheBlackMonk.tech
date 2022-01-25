import React, { Component } from 'react'


class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#/">CrypCurrent Exchange</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a
              className="nav-link small"
              href={`https://trade-am.osl.com/`} //account is also a link to etherscan
              target="_blank"
              rel="noopener noreferrer"
            >
              OSL Trade
            </a>
          </li>
        </ul>
      </nav>
    )
  }
}

export default Navbar;