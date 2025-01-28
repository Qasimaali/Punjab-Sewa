import React from "react";

const Navbar = () => {
  return (
    <div className="d-flex align-items-center justify-content-between p-3 shadow-sm bg-white">
      {/* Logo & Title */}
      <div className="d-flex align-items-center">
        <img
        

src="data:image/png;base64,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"
          alt="E-Sewa Punjab Logo"
          style={{ height: "50px", marginRight: "10px" }}
        />
        <div>
          <h4 className="mb-0 fw-bold">E-Sewa</h4>
          <span className="text-muted">P U N J A B</span>
        </div>
      </div>

      {/* Login Fields
      <div className="d-flex align-items-center">
        {/* User ID Input */}
        {/* <div className="me-3">
          <label className="fw-bold">User ID</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
          />
          <small className="text-muted">Forgot UserID?</small>
        </div> */}

        {/* Password Input */}
        {/* <div className="me-3">
          <label className="fw-bold">Password</label>
          <input type="password" className="form-control" />
          <small className="text-muted">Forgot Password?</small>
        </div> */}

        {/* Captcha Input */}
        {/* <div className="me-3">
          <label className="fw-bold">Captcha</label>
          <div className="d-flex align-items-center">
            <img
              src="captcha-image-url" // Replace with actual captcha image source
              alt="Captcha"
              style={{ height: "35px", marginRight: "5px" }}
            />
            <input type="text" className="form-control" />
          </div>
        </div>  */}

        {/* Login Button */}
        <div className="d-flex align-items-center">
        <button className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Navbar;








