import React, { Component } from 'react'

/*class NavBar extends Component {
    
    render() { 
        return ( <nav className ="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
            Navbar 
            <span className="badge badge-pill badge-secondary">
                {this.props.totalCounters}
            </span>
        </a>
      </nav> );
    }
}
export default NavBar;
*/



const NavBar = ({totalCounters}) => {// destructuring to get totalcounters 
    return ( 
            <nav className ="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
                Navbar 
                <span className="badge badge-pill badge-secondary">
                    {totalCounters}
                </span>
            </a>
            </nav>
    );
}
 
export default NavBar;