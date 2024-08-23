import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    salary: "",
    aadhar_card_number: "",
    pancard_number: "",
    degree: "",
    joining_date: "",
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
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", employee.name);
    formData.append("email", employee.email);
    formData.append("password", employee.password);
    formData.append("aadhar_card_number", employee.aadhar_card_number);
    formData.append("pancard_number", employee.pancard_number);
    formData.append("degree", employee.degree);
    formData.append("joining_date", employee.joining_date);
    formData.append("address", employee.address);
    formData.append("salary", employee.salary);
    formData.append("image", employee.image);
    formData.append("category_id", employee.category_id);

    axios
      .post("http://localhost:8000/auth/add_employee", formData)
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
        <h3 className="text-center">Add Employee</h3>
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
              required
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
              required
              onChange={(e) =>
                setEmployee({ ...employee, email: e.target.value })
              }
            />
          </div>
          <div className="col-12">
            <label htmlFor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control rounded-0"
              id="inputPassword4"
              placeholder="Enter Password"
              required
              onChange={(e) =>
                setEmployee({ ...employee, password: e.target.value })
              }
            />

            <label htmlFor="inputAadhar" className="form-label">
              Aadhar Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputAadhar"
              placeholder="Enter Aadhar Card No."
              autoComplete="off"
              required
              minLength="12"
              maxLength="12"
              onChange={(e) =>
                setEmployee({ ...employee, aadhar_card_number: e.target.value })
              }
            />

            <label htmlFor="inputPan" className="form-label">
              Pan Card No.
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputPan"
              placeholder="Enter Pan Card No."
              autoComplete="off"
              required
              minLength="10"
              maxLength="10"
              onChange={(e) =>
                setEmployee({ ...employee, pancard_number: e.target.value })
              }
            />

            <label htmlFor="inputDegree" className="form-label">
              Degree
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputDegree"
              placeholder="Enter Degree"
              autoComplete="off"
              required
              onChange={(e) =>
                setEmployee({ ...employee, degree: e.target.value })
              }
            />

            <label htmlFor="inputJoiningDate" className="form-label">
              Joining Date
            </label>
            <input
              type="date"
              className="form-control rounded-0"
              id="inputJoiningDate"
              placeholder="Enter Joining Date"
              autoComplete="off"
              required
              onChange={(e) =>
                setEmployee({ ...employee, joining_date: e.target.value })
              }
            />

            <label htmlFor="inputSalary" className="form-label">
              Salary
            </label>
            <input
              type="text"
              className="form-control rounded-0"
              id="inputSalary"
              placeholder="Enter Salary"
              autoComplete="off"
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
              {category.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
            </select>
          </div>
          <div className="col-12 mb-3">
            <label className="form-label" htmlFor="inputGroupFile01">
              Select Image
            </label>
            <input
              type="file"
              className="form-control rounded-0"
              id="inputGroupFile01"
              name="image"
              required
              onChange={(e) =>
                setEmployee({ ...employee, image: e.target.files[0] })
              }
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-success w-100">
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
