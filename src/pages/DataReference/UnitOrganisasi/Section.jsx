import React from "react";
import Pagination from "../../../components/Table/Pagination";
import Table from "./Components/Table";
import GroupButton from "./Components/GroupButton";

export default function Section() {
  return (
    <section className="section">
      <div className="row">
        <div className="col-sm-12">
          <GroupButton />
        </div>
        <div className="col-sm-12">
          <Table />
        </div>
        <div className="col-sm-12">
          <Pagination />
        </div>
      </div>
    </section>
  );
}
