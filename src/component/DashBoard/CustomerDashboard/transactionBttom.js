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

const data = [
    {
      id: 1,
      customer: "Beetlejuice",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan",
    },
    {
      id: 2,
      customer: "The Cotton",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", },
    {
      id: 3,
      customer: "Shawshank",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan",
   },
    {
      id: 4,
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan", 
     },
    {
      id: 5,
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan",
    },
    {
      id: 6,
      customer: "Ratatouille",
      date: "2007",
      tenor: "111",
      amount: "244",
      plan: "HyperPlan",
     }
]
const columns = [
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
  }
];

// RDT exposes the following internal pagination properties
const BootyPagination = ({
  rowsPerPage,
  rowCount,
  onChangePage,
  onChangeRowsPerPage, // available but not used here
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
      <ul className="pagination">
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

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));

function Table() {
  return (
    <div className="App">
      <div className="card table-responsive-sm">
        <DataTable
          title="Recent Transaction"
          columns={columns}
          data={data}
          defaultSortFieldID={1}
          selectableRows
          selectableRowsComponent={BootyCheckbox}
        />
      </div>
    </div>
  );
}
export default Table;