import React from 'react';
import '../assets/styles/Layout.css';

const Layout = (props) => (
    <div className="container mt-5 p-5">
        <div id="box" className="row">
            {props.children}
        </div>
    </div>
)
 
export default Layout;