import React, { Component } from 'react';
import Logo from './news-logo.png';
import './main.css';
import {
    Link
} from "react-router-dom";

export class Navbar extends Component {
    //You can make responsive by changing the font size
    render() {
        return (
            <>
                <div className='nav-container'>
                    <div className='nav-res'>
                        <Link to="/"><img src={Logo} alt="" className="nav-img" /></Link>
                        <p>Treshhon News</p>
                    </div>

                    <div className='nav-list'>
                        <div>
                            <Link to="/"><img src={Logo} alt="" className="nav-img" /> Treshhon News</Link></div>
                        <div><Link to="/entertainment">Entertainment</Link></div>
                        <div><Link to="/health">Health</Link></div>
                        <div><Link to="/business">Business</Link></div>
                        <div><Link to="/science">Science</Link></div>
                        <div><Link to="/technology">Technology</Link></div>
                        <div><Link to="/sports">Sports</Link></div>
                    </div>
                </div>
            </>
        )
    }
}

export default Navbar;