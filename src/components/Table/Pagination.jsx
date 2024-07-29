import React from "react";
import { usePageStateContext } from "../../contexts/PageContextProvider";
import { getQueryParams } from "../../helpers";

export default function Pagination() {
  const { paginations, searchs, setSearchs, setLoadingMessage } =
    usePageStateContext();

  return (
    <div className="table-responsive ">
      <ul className="pagination">
        {paginations.map((pagination, index) => {
          return (
            <li
              className={`page-item ${pagination.active && "active"} ${pagination.url == null && "disabled"}`}
              key={index}
            >
              <a
                className="page-link"
                href={pagination.url}
                onClick={(e) => {
                  e.preventDefault();
                  const page = getQueryParams(pagination.url);
                  setLoadingMessage("Reload data user!");
                  setSearchs({ ...searchs, ...page });
                }}
              >
                <div
                  className="text-nowrap"
                  dangerouslySetInnerHTML={{
                    __html: pagination.label,
                  }}
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
