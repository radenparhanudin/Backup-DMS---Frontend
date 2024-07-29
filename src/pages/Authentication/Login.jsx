import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import logo from "../../assets/img/logo-siumpeg.png";
import { useStateUserContext } from "../../contexts/UserContextProvider";
import axiosClient from "../../axiosClient";
import LoadingButton from "../../components/Loading/LoadingButton";

export default function Login() {
  /* Define variable */
  const resetFormData = {
    username: "",
    password: "",
  };

  /* Context */
  const { token, setToken, setUser } = useStateUserContext();
  if (token) {
    return <Navigate to={"/dashboard"} />;
  }

  /* State */
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState([]);
  const [formData, setFormData] = useState(resetFormData);

  /* Handler */
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  /* Define Function */
  const doLogin = (event) => {
    event.preventDefault();
    setProcessing(true);
    setError([]);
    axiosClient
      .post("/authentication/login", formData)
      .then(({ data }) => {
        console.log(data);
        setProcessing(false);
        setFormData(resetFormData);

        setUser(JSON.stringify(data.data.user));
        setToken(data.data.token);
      })
      .catch((err) => {
        setProcessing(false);
        const { response } = err;
        if (response != undefined) {
          const { data, status } = response;
          if (status === 422) {
            setError(data.message);
          } else {
            toast.error(data.message);
          }
        } else {
          console.log(err);
        }
      });
  };

  return (
    <main>
      <div className="container">
        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5 col-md-6 d-flex flex-column align-items-center justify-content-center">
                <div className="d-flex justify-content-center">
                  <Link
                    to={"/"}
                    className="logo text-center"
                    style={{ width: "100%" }}
                  >
                    <img
                      src={logo}
                      style={{ maxHeight: "80px" }}
                      alt="Logo SI-UMPEG"
                      className="mb-2"
                    />
                  </Link>
                </div>
                <div className="card mb-3">
                  <div className="card-body py-4 px-4">
                    <div className="text-center border-bottom mb-3">
                      <h4 className="d-none d-lg-block fw-bold mb-0 text-primary app-name">
                        DMS BACKUP
                      </h4>
                      <small className="d-none d-lg-block text-uppercase text-muted mb-1">
                        Document Management System
                      </small>
                      <small className="d-none d-lg-block text-uppercase mb-3">
                        Dinas Pendidikan dan Kebudayaan Kab. Lombok Barat
                      </small>
                    </div>
                    <form onSubmit={doLogin} className="row g-3">
                      <div className="col-12">
                        <label htmlFor="username" className="form-label">
                          Username
                        </label>
                        <input
                          type="text"
                          name="username"
                          id="username"
                          placeholder="Username"
                          className={`form-control ${error.username && "is-invalid"}`}
                          onChange={handleInputChange}
                          value={formData.username}
                        />
                        {error.username && (
                          <div className="invalid-feedback">
                            {error.username}
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password
                        </label>
                        <input
                          type="password"
                          name="password"
                          id="password"
                          placeholder="Password"
                          className={`form-control ${error.password && "is-invalid"}`}
                          onChange={handleInputChange}
                          value={formData.password}
                        />
                        {error.password && (
                          <div className="invalid-feedback">
                            {error.password}
                          </div>
                        )}
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 d-flex gap-2 justify-content-center align-items-center"
                          type="submit"
                          disabled={processing}
                        >
                          {processing ? (
                            <LoadingButton />
                          ) : (
                            <i className="bi bi-box-arrow-in-right"></i>
                          )}
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
