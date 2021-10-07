import React from 'react'

const IndividiualTransDetails = () => {
    return (
        
    <div className="transaction-details-body">
        <div className='transaction-header'>
            <h2>Transactions</h2>
            <p>Home/Transactions<span className='mini-paragraph'>HY78967578</span></p>
        </div>
        
      <div className="transaction-details">
       <div className='details-title'>
           <h3>Transaction Details</h3>
           <button class="btn-active " type="button" disabled>
                    Active
          </button>
       </div>
       <hr/>
       <div className='details details-name'>
           <h6>Customer Name</h6>
           <h3>Bright Ukpo</h3>
       </div>
       <hr/>
       <div className='details details-name'>
           <h6>HyperFund Plan Name</h6>
           <h3>Daddy’s Retirement</h3>
       </div>
       <hr/>
       <div className='double-details'>
           <div className="details">
           <h6>Amount paid</h6>
           <h3>NGN 60,000.00</h3> 
           </div>
           <div className='details details-rate rls'>
           <h6>Reference ID</h6>
           <h3>HY78967578</h3> 
           </div>
       </div>
       <hr/>
       <div className='double-details'>
           <div className="details">
           <h6>Start Date</h6>
           <h3>Mar 16,2020</h3> 
           </div>
           <div className="details details-rate rls1">
           <h6>End Date</h6>
           <h3>Mar 16,2021</h3> 
           </div>
       </div>
       <hr/>
       <div className='double-details'>
           <div className="details ">
           <h6>Bonus</h6>
           <h3>18%</h3> 
           </div>
           <div className="details details-rate rls2">
           <h6>Duration</h6>
           <h3>12 months</h3> 
           </div>
       </div>
       <hr/>
       <div className='double-details'>
           <div className="details">
           <h6>Returns Earned</h6>
           <h3>NGN 10,800</h3> 
           </div>
           <div className="details details-rate rls3">
           <h6>Expected Payment</h6>
           <h3>NGN 70,800</h3> 
           </div>
       </div>
      </div>
    </div>
  );

}

export default IndividiualTransDetails
