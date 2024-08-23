import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employee = () => {
  const [employee, setEmployee] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/auth/employee")
      .then((result) => {
        if (result.data.Status) {
          setEmployee(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:5000/auth/delete_employee/" + id)
      .then((result) => {
        if (result.data.Status) {
          window.location.reload();
        } else {
          alert(result.data.Error);
        }
      });
  };

  return (
    <div className="px-5 mt-3">
      <div className="d-flex justify-content-center">
        <h3>Employee List</h3>
      </div>
      <Link to="/dashboard/add_employee" className="btn btn-success">
        Add Employee
      </Link>
      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Degree</th>
              <th>Aadhar Card Number</th>
              <th>PAN Card Number</th>
              <th>Joining Date</th>
              <th>Salary</th>
              <th>Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td>
                  <img
                    src={`http://localhost:5000/Images/` + e.image}
                    alt="Employee"
                    className="employee_image"
                  />
                </td>
                <td>{e.degree}</td>
                <td>{e.aadhar_card_number}</td>
                <td>{e.pancard_number}</td>
                <td>{new Date(e.joining_date).toLocaleDateString()}</td>
                <td>{e.salary}</td>
                <td>{e.address}</td>

                <td>
                  <Link
                    to={`/dashboard/edit_employee/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-warning btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employee;
