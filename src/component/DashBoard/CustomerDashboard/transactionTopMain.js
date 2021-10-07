import React from 'react'
import { Card } from 'react-bootstrap'
import icon from '../../../image/trending-up.svg'
import chart from '../../../image/Group 425.svg'

const TransactionTop = (props) => {
    return (
        <div className="dashboard">
            <h2 className='dashboard-title'> Dashboard </h2>
            <div className="sales-chart">
                <div className="sales-header d-flex">
                    <div className='sales-text'> Daily Sales Income Chart</div>
                    <div class="btn-group chat-menu">
                <button class="btn btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    July2021
                </button>
                <ul class="dropdown-menu">
                    ...
                </ul>
                </div>

                <div class="btn-group ">
                <button class="btn  btn-sm dropdown-toggle chat-menu" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    All Time
                </button>
                <ul class="dropdown-menu">
                    ...
                </ul>
                </div>

                </div>
                <div className='chart-body'>
                <div className="chart">
                    <img src={chart} className='chart-icon' alt='chart'/>
                </div>
                <div className='calculation-chart'>
                <div className="calculations">
                 <Card className="calc-card">
                    <Card.Body className='card-body'>
                    <div>
                    <Card.Title className="card-title">232</Card.Title>
                    <Card.Text className='card-text'>
                    Customers
                    </Card.Text>
                    </div>
                    <Card.Img src={icon} className='trending-icon'/>
                  </Card.Body>
                </Card>
                </div>
                <div className="calculations">
                 <Card className="calc-card">
                    <Card.Body className='card-body'>
                    <div>
                    <Card.Title className="card-title">₦234,092,391</Card.Title>
                    <Card.Text className='card-text'>
                    Total Sales Income
                    </Card.Text>
                    </div>
                    <Card.Img src={icon} className='trending-icon'/>
                  </Card.Body>
                </Card>
                </div>
                <div className="calculations">
                 <Card className="calc-card">
                    <Card.Body className='card-body'>
                    <div>
                    <Card.Title className="card-title">₦234,092,391</Card.Title>
                    <Card.Text className='card-text'>
                    Total Sales Income
                    </Card.Text>
                    </div>
                    <Card.Img src={icon} className='trending-icon'/>
                  </Card.Body>
                </Card>
                </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default TransactionTop
