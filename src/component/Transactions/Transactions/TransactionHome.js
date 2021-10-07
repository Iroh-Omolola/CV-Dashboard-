import React from "react";
import DataTable from "react-data-table-component";
import "bootstrap";

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

const customerData = [
    {
      id: 1,
      transactionId:"001001001",
      customer: "Bright Ukpo",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", 
      rate:"20"
    },
    {
      id: 2,
      transactionId:"0010231001",
      customer: "The Cotton",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", 
      rate:"50"
    },
    {
      id: 3,
      transactionId:"0010231001",
      customer: "Shawshank",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", 
      rate:"50"
   },
    {
      id: 4,
      transactionId:"0010231001",
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "Brad Bird, Jan Pinkava", 
      rate:"50"
     },
    {
      id: 5,
      transactionId:"0010231001",
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", 
      rate:"50"
    },
    {
      id: 6,
      transactionId:"0010231001",
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      rate:30,
      plan: "HyperPlan", 
     },
     {
        id: 7,
        transactionId:"0010231001",
        customer: "Shawshank",
        date: "2007",
        tenor: "111",
        amount: "244",
        plan: "HyperPlan", 
        rate:"50"
     },
      {
        id: 8,
        transactionId:"0010231001",
        customer: "Ratatouille",
        date: "2007",
        tenor: "111",
        amount: "244",
        plan: "Brad Bird, Jan Pinkava", 
        rate:"50"
       },
      {
        id: 9,
        transactionId:"0010231001",
        customer: "Ratatouille",
        date: "2007",
        tenor: "111",
        amount: "244",
        plan: "HyperPlan", 
        rate:"50"
      },
      {
        id: 10,
        transactionId:"0010231001",
        customer: "Ratatouille",
        date: "2007",
        tenor: "111",
        amount: "244",
        rate:30,
        plan: "HyperPlan", 
       },
      {
        id: 11,
        transactionId:"0010231001",
        customer: "Ratatouille",
        date: "2007",
        tenor: "111",
        amount: "244",
        rate:30,
        plan: "Brad Bird, Jan Pinkava",
       },
       {
          id: 12,
          transactionId:"0010231001",
          customer: "Shawshank",
          date: "2007",
          tenor: "111",
          amount: "244",
          plan: "HyperPlan", 
          rate:"50"
       },
        {
          id: 13,
          transactionId:"0010231001",
          customer: "Ratatouille",
          date: "2007",
          tenor: "111",
          amount: "244",
          plan: "HyperPlan", 
          rate:"50"
         },
        {
          id: 14,
          transactionId:"0010231001",
          customer: "Ratatouille",
          date: "2007",
          tenor: "111",
          amount: "244",
          plan: "HyperPlan", 
          rate:"50"
        },
        {
          id: 15,
          transactionId:"0010231001",
          customer: "Ratatouille",
          date: "2007",
          tenor: "111",
          amount: "244",
          rate:30,
          plan: "HyperPlan", 
         }
]
const columns = [
    {
        name: "TransactionID",
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
    sortable: true
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
    name: "Tenor (months)",
    selector: (row) => row.tenor,
    sortable: true,
    right: true
  },
  {
    name: "Rate(%)",
    selector: (row) => row.rate,
    sortable: true
  },
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


function CustomerData() {
  return (
    <div className="transaction-body">
        <div className='transaction-header'>
            <h2>Transactions</h2>
            <p>Home/<span className='mini-paragraph'>Transactions</span></p>
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
        <DataTable className='table'
          columns={columns}
          data={customerData}
          defaultSortFieldID={1}
          pagination
          paginationComponentOptions={BootyPagination}
        />
      </div>
    </div>
  );
}
export default CustomerData;