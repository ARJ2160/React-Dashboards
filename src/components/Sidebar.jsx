import React, { useState } from 'react'
import "./Sidebar.css"
import Menu from "@material-ui/icons/Menu"
import SchoolIcon from "@material-ui/icons/School";
import PersonIcon from '@material-ui/icons/Person';
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [sidebar, setShowSidebar] = useState(false);
    
    //Toggle Sidebar
    const showSidebar = () => setShowSidebar(!sidebar);

    return (
        <div className="sidebarWrapper">
            <nav className="sidebarToggle">
                <Menu className="menu-bars" onClick={ showSidebar } />
            </nav>
            <div className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul className="close-nav">
                    <ClearIcon onClick={ showSidebar } />
                </ul>
                <ul className="sidebarList px-0 px-3">
                    <span class="my-5" style={{ pointerEvents: 'none' }}>Menu</span>
                    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="sidebarListItem mb-5">
                            <HomeIcon /> 
                            <div className="home-route mx-3">
                                Home
                            </div>
                        </li>
                    </Link>
                    <Link to = "/colleges" style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="sidebarListItem mb-5">
                            <SchoolIcon />
                            <div className="college-route mx-3">
                                    College
                            </div>
                        </li>
                    </Link>
                    <Link to = "/students" style={{ textDecoration: 'none', color: 'white' }}>
                        <li className="sidebarListItem mb-5">
                            <PersonIcon/>
                            <div className="student-route mx-3">
                                 Students
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar