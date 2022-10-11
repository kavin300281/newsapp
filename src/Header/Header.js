import React from 'react';
import './header.css'
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
        <div className='Header_section'>
            <h3><span style={{color:'rgb(62 179 235)'}}>React</span> News_app</h3>
        </div>)
    }
}
export default Header;