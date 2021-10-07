import React from "react";
import { Route } from "react-router-dom";
import Transaction from "./DashBoard/CustomerDashboard/Transaction";
import HomeTrans from "./Transactions/Transactions/HomeTrans";
import TransactionActiveDetails from "./Transactions/TransactionbyId/TransactionActiveDetails";
import CustomerTrans from "./Customer/Customer/CustomerGraph";
import SalesAgentDetails from "./SalesAgent/SalesAgentData/salesGraph";
import AgentDetails from "./SalesAgent/SalesAgentbyId/agentbyId";


const MiniRoute = () => {
    return (
        <>
            <Route exact path="/" component={Transaction}/>
            <Route exact path="/transaction" component={HomeTrans}/>
            <Route exact path="/id" component={TransactionActiveDetails}/>
            <Route exact path="/customer" component={CustomerTrans}/>
            <Route exact path="/mini" component={AgentDetails}/>
            <Route exact path="/sales" component={SalesAgentDetails}/>     
      </>
    )
}

export default MiniRoute
