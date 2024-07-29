import React, { useEffect, useState } from "react";
import Profile from "./Component/Profile";
import axiosClient from "../../../axiosClient";

export default function Section() {
  /* Define variable */
  /* Props */
  /* Context */
  /* State */
  const [profile, setProfile] = useState(null);

  /* useEffect */
  useEffect(() => {
    getProfile();
  }, []);

  /* Handler */
  /* Create */
  /* Read */
  const getProfile = () => {
    axiosClient.get("/user/profile").then(({ data }) => {
      setProfile(data.data);
    });
  };
  /* Update */
  /* Delete */
  /* Define Function */

  return (
    <div className="section">
      <div className="row">
        <div className="col-lg-12">
          {profile && profile.unit_organisasi && (
            <div className="alert alert-info" role="alert">
              <h5 className="mb-0 text-primary fw-semibold">UNIT KERJA</h5>
              <small className="fw-semibold text-primary">
                {profile.unit_organisasi.nama_unor}
              </small>
            </div>
          )}
        </div>
        <div className="col-lg-4">
          <Profile />
        </div>
      </div>
    </div>
  );
}
