import React from "react";
import { MDBDataTable } from "mdbreact";

const DatatablePage = () => {
  const data = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
        width: 140
      },
      {
        label: "Date and Time",
        field: "datetime",
        sort: "asc",
        width: 80
      },
      {
        label: "Comment",
        field: "comment",
        sort: "asc",
        width: 100
      }
    ],
    rows: [
      {
        name: "Empty",
        datetime: "...",
        comment: "..."
      }
    ]
  };

  return (
    <MDBDataTable
      scrollY
      maxHeight='200px'
      striped
      bordered
      small
      data={data}
    />
  );
};

export default DatatablePage;
