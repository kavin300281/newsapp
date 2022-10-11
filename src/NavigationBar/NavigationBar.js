import React from "react";
import './NavigationBar.css';
import {NavLink} from 'react-router-dom';
class NavigationBar extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="navbar-container">
                <NavLink to={"/topstories"}  className="nav-link" ><i class="fa fa-globe" aria-hidden="true"></i>Top stories</NavLink>
                <NavLink to={"/topics/general"} className="nav-link"><i class="fa fa-flag" aria-hidden="true"></i>India</NavLink>
                <NavLink to={"/topics/business"} className="nav-link"><i class="fa fa-building" aria-hidden="true"></i>Business</NavLink>
                <NavLink to={"/topics/entertainment"} className="nav-link"><i class="fa fa-rocket" aria-hidden="true"></i>Entertainment</NavLink>
                <NavLink to={"/topics/sports"} className="nav-link"><i class="fa fa-bicycle" aria-hidden="true"></i>Sports</NavLink>
                
            </div>
        );
    }
}

export default NavigationBar