import React from 'react'
import { useLocation } from 'react-router'
import { Link } from "react-router-dom"
import dashboardInactive from '../../image/Dashboard.svg'
import dashboardIcon from '../../image/Dashboard (1).svg'
import user from '../../image/Ellipse 8.png'

const MobileSidebar = ({accountType, isShow}) => {
    const location = useLocation();

    return (
        <>
        {accountType==="agent" && (
   
        <div className="row flex-nowrap mobile-high shownav">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">  
        <div className="d-flex nav-links flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 min-vw-100">
        <div className="user-profile mobile-user-profile">
            <img src={user} alt="profile" className="profile-pic"/>
            <h2>Hello Adeyemi</h2>
            <h6>yemi.adedapo@crowdyvest.com</h6>
            <hr className="profile-header-rule"/>
        </div> 
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-link">
                    <Link to="/"  class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/"? dashboardIcon : dashboardInactive} class="icon" alt="icon"/>
                    <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Dashboard</span>
                    </Link>
                </li>
                
                <li className="nav-link">
                    <Link href="/customer" class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/customer"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                    <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Customers</span>
                     </Link>
                </li>
                <li className="nav-link">
                    <Link to="/transaction" class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/transaction"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                    <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/transaction"? "active" : ""}`}>Transactions</span>
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                <li className="nav-link">
                    <Link to="#" className="nav-link px-0 align-middle">
                    <img src={dashboardIcon} className="icon" alt="icon"/> <span className="ms-1  d-sm-inline nav-item">Logout</span>
                    </Link>
                </li>
            </ul>
        </div>
        </div>
        </div>
        )}
        {accountType==="supervisor" && (
             <div className="container-fluid">   
             <div className={`row flex-nowrap mobile-high ${isShow?"shownav":""}`}>
            <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0">  
                <div className="d-flex nav-links flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 min-vw-100">
                <div className="user-profile mobile-user-profile">
                    <img src={user} alt="profile" classNameName="profile-pic"/>
                    <h2>Hello Adeyemi</h2>
                    <h6>yemi.adedapo@crowdyvest.com</h6>
                    <hr className="profile-header-rule"/>
                </div> 
                    <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-link">
                            <Link to="/"  className="nav-link px-0 align-middle">
                            <img src={location.pathname==="/"? dashboardIcon : dashboardInactive} className="icon" alt="icon"/>
                            <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/sales" className="nav-link px-0 align-middle">
                            <img src={location.pathname==="/sales"? dashboardIcon : dashboardInactive}  className="icon" alt="icon"/>
                            <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/sales"? "active" : ""}`}>Sales Agents</span>
                            </Link>
                        </li>
                       
                        <li className="nav-link">
                            <Link to="/customer" className="nav-link px-0 align-middle">
                            <img src={location.pathname==="/customer"? dashboardIcon : dashboardInactive}  className="icon" alt="icon"/>
                            <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Customers</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/transaction" className="nav-link px-0 align-middle">
                            <img src={location.pathname==="/transaction"? dashboardIcon : dashboardInactive}  className="icon" alt="icon"/>
                            <span className={`ms-1  d-sm-inline nav-item ${location.pathname==="/transaction"? "active" : ""}`}>Transactions</span> 
                            </Link>
                        </li>
                    </ul>
                   <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                      <li className="nav-link">
                            <Link to="#" className="nav-link px-0 align-middle">
                            <img src={dashboardIcon} className="icon" alt="icon"/> <span className="ms-1  d-sm-inline nav-item">Logout</span> 
                            </Link>
                        </li>
                   </ul>
                </div>
            </div>
        </div>
    </div> 
        )}
        </>
    )
}

export default MobileSidebar
