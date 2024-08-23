import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    aadhar_card_number: "",
    pancard_number: "",
    degree: "",
    joining_date: "",
    salary: "",
    address: "",
    category_id: "",
    image: "",
  });
  const [category, setCategory] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/category")
      .then((result) => {
        if (result.data.Status) {
          setCategory(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:8000/auth/employee/" + id)
      .then((result) => {
        setEmployee({
          ...employee,
          name: result.data.Result[0].name,
          email: result.data.Result[0].email,
          aadhar_card_number: result.data.Result[0].aadhar_card_number,
          pancard_number: result.data.Result[0].pancard_number,
          degree: result.data.Result[0].degree,
          joining_date: result.data.Result[0].joining_date,
          address: result.data.Result[0].address,
          salary: result.data.Result[0].salary,
          category_id: result.data.Result[0].category_id,
          image: result.data.Result[0].image,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:8000/auth/edit_employee/" + id, employee)
      .then((result) => {
        if (result.data.Status) {
          navigate("/dashboard/employee");
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3">
      <div
        className="p-3 rounded w-50 border"
        style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
      >
        <h3 className="text-center">Edit Employee</h3>
        <form className="row g-1" onSubmit={handleSubmit}>
          <div className="col-12">
            <label htmlFor="inputName" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputName"
              placeholder="Enter Name"
              value={employee.name}
              onChange={(e) =>
                setEmployee({ ...employee, name: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control rounded-0"
              id="inputEmail4"
              placeholder="Enter Email"
              autoComplete="off"
              value={employee.email}
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputAadhar" className="form-label">
              Aadhar Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAadhar"
              placeholder="Enter Aadhar Card No."
              autoComplete="off"
              value={employee.aadhar_card_number}
              onChange={(e) =>
                setEmployee({ ...employee, aadhar_card_number: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPanCard" className="form-label">
              Pan Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPanCard"
              placeholder="Enter Pan Card No."
              autoComplete="off"
              value={employee.pancard_number}
              onChange={(e) =>
                setEmployee({ ...employee, pancard_number: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputDegree" className="form-label">
              Degree
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDegree"
              placeholder="Enter Degree"
              autoComplete="off"
              value={employee.degree}
              onChange={(e) =>
                setEmployee({ ...employee, degree: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputJoiningDate" className="form-label">
              Joining Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputJoiningDate"
              placeholder="Enter Joining Date"
              autoComplete="off"
              value={employee.joining_date}
              onChange={(e) =>
                setEmployee({ ...employee, joining_date: e.target.value })
              }
            />
          </div>

          <div className="col-12">
            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
              value={employee.salary}
              onChange={(e) =>
                setEmployee({ ...employee, salary: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAddress"
              placeholder="1234 Main St"
              autoComplete="off"
              value={employee.address}
              onChange={(e) =>
                setEmployee({ ...employee, address: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              name="category"
              id="category"
              className="form-select"
              onChange={(e) =>
                setEmployee({ ...employee, category_id: e.target.value })
              }
            >
              {category.map((c, index) => {
                return (
                  <option key={index} value={c.id}>
                    {c.name}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-success w-100">
              Edit Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
