import React, { useState } from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";

import "ag-grid-enterprise";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";

const ReactAG = (props) => {
  //const [gridApi, setGridApi] = useState(null);
  //const [gridColumnApi, setGridColumnApi] = useState(null);

  const onGridReady = (params) => {
    //setGridApi(params.api);
    //setGridColumnApi(params.columnApi);
  };

  return (
    <div className="ag-theme-alpine" style={{ height: 400, width: 600 }}>
      <AgGridReact onGridReady={onGridReady} rowData={props.rowData}>
        {console.log(props.rowData)}
        <AgGridColumn field="name"></AgGridColumn>
      </AgGridReact>
    </div>
  );
};
export default ReactAG;
