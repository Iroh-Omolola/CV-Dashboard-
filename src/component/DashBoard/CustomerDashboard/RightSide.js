import React from 'react'
import Table from "./transactionBttom";
import TransactionTop from './transactionTopMain';

const RightSide = () => {
    return (
        <div className='rightHand-body'>
            <TransactionTop/>
          <Table/>
        </div>
    )
}

export default RightSide
