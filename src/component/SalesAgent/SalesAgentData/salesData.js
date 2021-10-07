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

const salesData = [
    {
      id: 1,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
    },
    {
      id: 2,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
    },
    {
      id: 3,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
   },
    {
      id: 4,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
     },
    {
      id: 5,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
    },
    {
      id: 6,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
     },
     {
      id: 7,
      agent: "Bright Ukpo",
      email: "uko@gmail.com",
      dateJoined: "24 Sep 2020",
      totalSales:"N700000",
      commissions: "N7000000",
      customers:"12"
     },
      {
        id: 8,
        agent: "Bright Ukpo",
        email: "uko@gmail.com",
        dateJoined: "24 Sep 2020",
        totalSales:"N700000",
        commissions: "N7000000",
        customers:"12"
       },
      {
        id: 9,
        agent: "Bright Ukpo",
        email: "uko@gmail.com",
        dateJoined: "24 Sep 2020",
        totalSales:"N700000",
        commissions: "N7000000",
        customers:"12"
      },
      {
        id: 10,
        agent: "Bright Ukpo",
        email: "uko@gmail.com",
        dateJoined: "24 Sep 2020",
        totalSales:"N700000",
        commissions: "N7000000",
        customers:"12"
       },
      {
        id: 11,
        agent: "Bright Ukpo",
        email: "uko@gmail.com",
        dateJoined: "24 Sep 2020",
        totalSales:"N700000",
        commissions: "N7000000",
        customers:"12"
       },
       {
          id: 12,
          agent: "Bright Ukpo",
          email: "uko@gmail.com",
          dateJoined: "24 Sep 2020",
          totalSales:"N700000",
          commissions: "N7000000",
          customers:"12"
       },
        {
          id: 13,
          agent: "Bright Ukpo",
          email: "uko@gmail.com",
          dateJoined: "24 Sep 2020",
          totalSales:"N700000",
          commissions: "N7000000",
          customers:"12"
         },
        {
          id: 14,
          agent: "Bright Ukpo",
          email: "iroh.omolola@gmail.com",
          dateJoined: "24 Sep 2020",
          totalSales:"N700000",
          commissions: "N7000000",
          customers:"12"
        }
]
const columns = [
    {
        name: "Sales Agent",
        selector: (row) => row.agent,
        sortable: true
      },
  {
    name: "Email",
    selector: (row) => row.email,
    sortable: true
  },
  {
    name: "Date Joined",
    selector: (row) => row.dateJoined,
    sortable: true,
    right: true
  },
   {
    name: "Commissions",
    selector: (row) => row.commissions,
    sortable: true,
    right: true
  },
  {
    name: "Customers",
    selector: (row) => row.customers,
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


const SalesAgentData =()=> {
  return (
    <div className="transaction-body">
        <div className='transaction-header'>
            <h2>Sales Agents</h2>
            <p>Home/<span className='mini-paragraph'>Sales Agents</span></p>
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
          data={salesData}
          defaultSortFieldID={1}
          pagination
          paginationComponentOptions={BootyPagination}
        />
      </div>
    </div>
  );
}
export default SalesAgentData;