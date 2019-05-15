import React from 'react'

import logo from '../assets/images/mydata/mydata-wheel-logo.png';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>MyData Scotland</h1>
        <p>A Scottish community of the data conscious individuals<br />
        part of the  <a href="https://mydata.org">MyData Global</a> organisation.</p>
    </header>
)

export default Header
