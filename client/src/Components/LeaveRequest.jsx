import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

const LeaveRequest = () => {
  const [formData, setFormData] = useState({
    employeeName: "",
    leaveType: "",
    startDate: "",
    endDate: "",
    reason: "",
    termsAccepted: false,
  });
//  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("http://localhost:5000/employee/leave_request", formData)
    .then((result) => {
      console.log(result);
      
      if (result.data.Status) {
        // navigate("/employee_dashboard");
      } else {
        alert(result.data.Error);
      }
    })
    .catch((err) => console.log(err));
    console.log("Form submitted:", formData);
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div
        className="p-3 rounded w-50 border"
        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
      >
        <h3 className="text-center">Leave Request Form</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="employeeName" className="form-label">
              Employee Name
            </label>
            <input
              type="text"
              className="form-control"
              id="employeeName"
              name="employeeName"
              value={formData.employeeName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="leaveType" className="form-label">
              Leave Type
            </label>
            <select
              className="form-select"
              id="leaveType"
              name="leaveType"
              value={formData.leaveType}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select leave type
              </option>
              <option value="sick">Sick Leave</option>
              <option value="vacation">Vacation Leave</option>
              <option value="personal">Personal Leave</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="startDate" className="form-label">
              Start Date
            </label>
            <input
              type="date"
              className="form-control"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="endDate" className="form-label">
              End Date
            </label>
            <input
              type="date"
              className="form-control"
              id="endDate"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="reason" className="form-label">
              Reason for Leave
            </label>
            <textarea
              className="form-control"
              id="reason"
              name="reason"
              rows="3"
              value={formData.reason}
              onChange={handleChange}
              placeholder="Describe the reason for your leave"
              required
            ></textarea>
          </div>

          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="terms"
              name="termsAccepted"
              checked={formData.termsAccepted}
              onChange={handleChange}
              required
            />
            <label className="form-check-label" htmlFor="terms">
              I agree to the terms and conditions
            </label>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success w-100">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LeaveRequest;
