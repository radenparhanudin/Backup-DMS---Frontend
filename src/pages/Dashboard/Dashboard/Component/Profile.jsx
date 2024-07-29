import React, { useEffect, useState } from "react";
import { useStateUserContext } from "../../../../contexts/UserContextProvider";
import axiosClient from "../../../../axiosClient";

export default function Profile() {
  /* Define variable */

  /* Props */
  /* Context */
  const { user } = useStateUserContext();

  /* State */
  const [roles, setRoles] = useState([]);
  const [loadingRoles, setLoadingRoles] = useState(false);

  /* useEffect */
  useEffect(() => {
    getRoles();
  }, []);

  /* Handler */
  /* Create */
  /* Read */
  const getRoles = () => {
    setLoadingRoles(true);
    axiosClient.get("/user/roles").then(({ data }) => {
      setLoadingRoles(false);
      setRoles(data.data);
    });
  };
  /* Update */
  /* Delete */
  /* Define Function */

  return (
    <div className="card profile shadow-none">
      <div className="card-body profile-card pt-4 d-flex flex-column align-items-center">
        <img src={user.avatar} alt="Profile" className="rounded-circle mb-3" />
        <h2 className="text-center my-0">{user.name}</h2>
        <h3>{user.username}</h3>
        <div className="d-flex gap-1 justify-content-center flex-wrap mt-3 border-top pt-3 w-100">
          {loadingRoles && (
            <div className="d-flex align-items-center gap-1">
              <div
                className="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></div>
              <span role="status">Loading...</span>
            </div>
          )}
          {roles.map((myRole) => {
            return (
              <button
                key={myRole.id}
                className="btn btn-sm btn-primary text-nowrap"
              >
                {myRole.description}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
