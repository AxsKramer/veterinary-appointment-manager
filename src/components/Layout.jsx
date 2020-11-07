import React from 'react';
import '../assets/styles/Layout.css';

const Layout = (props) => (
    <div className="container mt-5 p-5">
        <div className="row">
            {props.children}
        </div>
    </div>
)
 
export default Layout;