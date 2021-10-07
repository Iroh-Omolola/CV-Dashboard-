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
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
    },
    {
      id: 2,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
    },
    {
      id: 3,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
   },
    {
      id: 4,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
     },
    {
      id: 5,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
    },
    {
      id: 6,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
     },
     {
      id: 7,
      customer: "Bright Ukpo",
      email: "uko@gmail.com",
      portfolio: "N7,000,000",
      dateJoined: "24 Sep 2020",
      lastTransDate: "24 Sep 2020"
     },
      {
        id: 8,
        customer: "Bright Ukpo",
        email: "uko@gmail.com",
        portfolio: "N7,000,000",
        dateJoined: "24 Sep 2020",
        lastTransDate: "24 Sep 2020"
       },
      {
        id: 9,
        customer: "Bright Ukpo",
        email: "uko@gmail.com",
        portfolio: "N7,000,000",
        dateJoined: "24 Sep 2020",
        lastTransDate: "24 Sep 2020"
      },
      {
        id: 10,
        customer: "Bright Ukpo",
        email: "uko@gmail.com",
        portfolio: "N7,000,000",
        dateJoined: "24 Sep 2020",
        lastTransDate: "24 Sep 2020"
       },
      {
        id: 11,
        customer: "Bright Ukpo",
        email: "uko@gmail.com",
        portfolio: "N7,000,000",
        dateJoined: "24 Sep 2020",
        lastTransDate: "24 Sep 2020"
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
          customer: "Bright Ukpo",
          email: "uko@gmail.com",
          portfolio: "N7,000,000",
          dateJoined: "24 Sep 2020",
          lastTransDate: "24 Sep 2020"
         },
        {
          id: 14,
          customer: "Bright Ukpo",
          email: "uko@gmail.com",
          portfolio: "N7,000,000",
          dateJoined: "24 Sep 2020",
          lastTransDate: "24 Sep 2020"
        },
        {
          id: 15,
          customer: "Bright Ukpo",
          email: "uko@gmail.com",
          portfolio: "N7,000,000",
          dateJoined: "24 Sep 2020",
          lastTransDate: "24 Sep 2020"
         }
]
const columns = [
    {
        name: "Customer",
        selector: (row) => row.customer,
        sortable: true
      },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true
  },
  {
    name: "Portfolio Size",
    selector: (row) => row.portfolio,
    sortable: true
  },
  {
    name: "Date Joined",
    selector: (row) => row.dateJoined,
    sortable: true,
    right: true
  },
   {
    name: "Last Transaction Date",
    selector: (row) => row.lastTransDate,
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


const CustomerData =()=> {
  return (
    <div className="transaction-body">
        <div className='transaction-header'>
            <h2>Customers</h2>
            <p>Home/<span className='mini-paragraph'>Customers</span></p>
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