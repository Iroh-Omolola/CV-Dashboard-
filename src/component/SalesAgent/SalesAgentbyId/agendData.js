import React from "react";
import DataTable from "react-data-table-component";
import "bootstrap";
import { Card } from 'react-bootstrap'
import icon from '../../../image/trending-up.svg'

function getNumberOfPages(rowCount, rowsPerPage) {
  return Math.ceil(rowCount / rowsPerPage);
}

function toPages(pages) {
  const results = [];

  for (let i = 1; i < pages; i++) {
    results.push(i);
  }

  return results;
}

const salesData = [
    {
      id: 1,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
    },
    {
      id: 2,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
    },
    {
      id: 3,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
   },
    {
      id: 4,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
     },
    {
      id: 5,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
    },
    {
      id: 6,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
     },
     {
      id: 7,
      transactionId:"HY78967578",
      customer: "Bright Ukpo",
      plan:"HyperPlan",
      date: "24 Sep 2020",
      amount:"N700000",
      tenor: "12",
      rate:"5"
     },
      {
        id: 8,
        transactionId:"HY78967578",
        customer: "Bright Ukpo",
        plan:"HyperPlan",
        date: "24 Sep 2020",
        amount:"N700000",
        tenor: "12",
        rate:"5"
       },
      {
        id: 9,
        transactionId:"HY78967578",
        customer: "Bright Ukpo",
        plan:"HyperPlan",
        date: "24 Sep 2020",
        amount:"N700000",
        tenor: "12",
        rate:"5"
      },
      {
        id: 10,
        transactionId:"HY78967578",
        customer: "Bright Ukpo",
        plan:"HyperPlan",
        date: "24 Sep 2020",
        amount:"N700000",
        tenor: "12",
        rate:"5"
       }
]
const columns = [
    {
        name: "Transaction ID",
        selector: (row) => row.transactionId,
        sortable: true
      },
  {
    name: "Customer",
    selector: (row) => row.customer,
    sortable: true
  },
  {
    name: "Plan",
    selector: (row) => row.plan,
    sortable: true,
    right: true
  },
  {
    name: "Date",
    selector: (row) => row.date,
    sortable: true,
    right: true
  },
   {
    name: "Amount",
    selector: (row) => row.amount,
    sortable: true,
    right: true
  },
  {
    name: "Tenor",
    selector: (row) => row.tenor,
    sortable: true,
    right: true
  },
  {
    name: "Rate(%)",
    selector: (row) => row.rate,
    sortable: true,
    right: true
  }
];

const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, 
  currentPage
}) => {
  const handleBackButtonClick = () => {
    onChangePage(currentPage - 1);
  };

  const handleNextButtonClick = () => {
    onChangePage(currentPage + 1);
  };

  const handlePageNumber = (e) => {
    onChangePage(Number(e.target.value));
  };

  const pages = getNumberOfPages(rowCount, rowsPerPage);
  const pageItems = toPages(pages);
  const nextDisabled = currentPage === pageItems.length;
  const previosDisabled = currentPage === 1;

  return (
    <nav>
      <ul className="pagination " >
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleBackButtonClick}
            disabled={previosDisabled}
            aria-disabled={previosDisabled}
            aria-label="previous page"
          >
            Previous
          </button>
        </li>
        {pageItems.map((page) => {
          const className =
            page === currentPage ? "page-item active" : "page-item";

          return (
            <li key={page} className={className}>
              <button
                className="page-link"
                onClick={handlePageNumber}
                value={page}
              >
                {page}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            onClick={handleNextButtonClick}
            disabled={nextDisabled}
            aria-disabled={nextDisabled}
            aria-label="next page"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};


const SalesAgentIdData =()=> {
  return (
    <div className="transaction-body">
        <div className='transaction-header'>
            <h2>Sales Agents</h2>
            <p>Home/ Sales Agent<span className='mini-paragraph'>Customers</span></p>
        </div>
      <div className="card-transaction">

      <div className="all-time">
        <div></div>
      <div class="btn-group ">
         <button class="btn btn-home  btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                   All Time
          </button>
          <ul class="dropdown-menu">
                    ...
          </ul>
          </div>
      </div>
      <div className="agent-calc-board d-flex">
                <div className="mini-card-calc">
                 <Card className="card-calc">
                    <Card.Body className='card-body'>
                    <div>
                    <Card.Title className="card-title">Sales person 1</Card.Title>
                    <Card.Text className='card-text'>
                    CV67829929<span>.</span>20 July 2020
                    </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
                </div>
                <div className="mini-card-calc">
                 <Card className="card-calc card-two">
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
                <div className="mini-card-calc">
                 <Card className="card-calc card-three">
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
                </div>
        <DataTable className='table'
          columns={columns}
          data={salesData}
          defaultSortFieldID={1}
          pagination
          paginationComponentOptions={BootyPagination}
        />
      </div>
    </div>
  );
}
export default SalesAgentIdData;