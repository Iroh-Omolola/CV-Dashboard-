import React from 'react'
import { Link } from "react-router-dom"
import { useLocation } from 'react-router'
import dashboardInactive from '../../image/Dashboard.svg'
import dashboardIcon from '../../image/Dashboard (1).svg'
import user from '../../image/Ellipse 8.png'

const Sidebar = ({ isShow, accountType }) => {
    const location = useLocation();

    return ( 
        <>
        {accountType==="agent" && (

        <div class="container-fluid">   
        <div class="row flex-nowrap high">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">  
        <div class="d-flex nav-links flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 min-vw-100">
        <div className="user-profile">
            <img src={user} alt="profile" className="profile-pic"/>
            <h2>Hello Adeyemi</h2>
            <h6>yemi.adedapo@crowdyvest.com</h6>
            <hr className="profile-header-rule"/>
        </div> 
            <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                <li className="nav-link">
                    <Link to="/"  class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/"? dashboardIcon : dashboardInactive} class="icon" alt="icon"/>
                    <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Dashboard</span>
                    </Link>
                </li>
                
                <li className="nav-link">
                    <Link to="/customer" class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/customer"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                    <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Customers</span>
                     </Link>
                </li>
                <li className="nav-link">
                    <Link to="/transaction" class="nav-link px-0 align-middle">
                    <img src={location.pathname==="/transaction"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                    <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/transaction"? "active" : ""}`}>Transactions</span>
                     </Link>
                </li>
            </ul>
           <footer className="logout">
                   <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                      <li className="nav-link">
                            <Link to="#" class="nav-link px-0 align-middle">
                            <img src={dashboardIcon} class="icon" alt="icon"/> <span class="ms-1  d-sm-inline nav-item">Logout</span> 
                            </Link>
                        </li>
                   </ul>
          </footer>
        </div>
        </div>
        </div>
        </div> 
        )}
        {accountType==="supervisor" && (
             <div class="container-fluid">   
             <div class="row flex-nowrap high">
            <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0">  
                <div class="d-flex nav-links flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100 min-vw-100">
                <div className="user-profile">
                    <img src={user} alt="profile" className="profile-pic"/>
                    <h2>Hello Adeyemi</h2>
                    <h6>yemi.adedapo@crowdyvest.com</h6>
                    <hr className="profile-header-rule"/>
                </div> 
                    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                        <li className="nav-link">
                            <Link to="/"  class="nav-link px-0 align-middle">
                            <img src={location.pathname==="/"? dashboardIcon : dashboardInactive} class="icon" alt="icon"/>
                            <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Dashboard</span>
                            </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/sales" class="nav-link px-0 align-middle">
                            <img src={location.pathname==="/sales"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                            <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/sales"? "active" : ""}`}>Sales Agents</span>
                            </Link>
                        </li>
                       
                        <li className="nav-link">
                            <Link to="/customer" class="nav-link px-0 align-middle">
                            <img src={location.pathname==="/customer"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                            <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/customer"? "active" : ""}`}>Customers</span>
                             </Link>
                        </li>
                        <li className="nav-link">
                            <Link to="/transaction" class="nav-link px-0 align-middle">
                            <img src={location.pathname==="/transaction"? dashboardIcon : dashboardInactive}  class="icon" alt="icon"/>
                            <span class={`ms-1  d-sm-inline nav-item ${location.pathname==="/transaction"? "active" : ""}`}>Transactions</span>
                             </Link>
                        </li>
                    </ul>
                  <footer className="logout">
                   <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                      <li className="nav-link">
                            <Link to="#" class="nav-link px-0 align-middle">
                            <img src={dashboardIcon} class="icon" alt="icon"/> <span class="ms-1  d-sm-inline nav-item">Logout</span> 
                            </Link>
                        </li>
                   </ul>
                  </footer>
                </div>
            </div>
        </div>
    </div> 
        )}
        </>
    )
}

export default Sidebar