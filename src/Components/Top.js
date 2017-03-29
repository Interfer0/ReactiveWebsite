import React, { Component } from 'react';
import {Link} from 'react-router';
import '../styles/top.css';

//react router link
class Top extends Component {
    render() {
        return ( 

                <div className="Nav" >
                    <div className="switcher">&#9776;   <span className="MiniBigelow">Daniel Bigelow</span></div>
                    <div className="links">
                        {/* Add links here */}
                        <Link to='/' className="tbLink">Home</Link>
                        <Link to='/Goals' className="tbLink">Goals</Link>
                        <Link to='/Classes' className="tbLink">Classes</Link>
                        <Link to='/About' className="tbLink">About</Link>
                    </div>
                </div> 

            
        );
    }
}


export default Top;