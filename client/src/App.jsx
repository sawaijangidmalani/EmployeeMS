import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Home from "./Components/Home";
import Employee from "./Components/Employee";
import Category from "./Components/Category";
import AddCategory from "./Components/AddCategory.jsx";
import AddEmployee from "./Components/AddEmployee.jsx";
import EditEmployee from "./Components/EditEmployee.jsx";
import Start from "./Components/Start.jsx";
import EmployeeLogin from "./Components/EmployeeLogin";
import EmployeeDetail from "./Components/EmployeeDetail";
import PrivateRoute from "./Components/PrivateRoute";
import EmployeeDashboard from "./Components/EmployeeDashboard.jsx";
import LeaveRequest from "./Components/LeaveRequest.jsx";
import ManageLeaveRequest from "./Components/ManageLeaveRequest.jsx";
//import EmployeeDetails_1 from "./Components/EmployeeDetails_1.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Start />}></Route>
        <Route path="/adminlogin" element={<Login />}></Route>
        <Route path="/employee_login" element={<EmployeeLogin />}></Route>
        <Route path="/employee_detail/:id" element={<EmployeeDetail />}></Route>
        <Route path="/" element={<EmployeeDashboard />}>
          <Route
            path="/employee_dashboard/employee_detail/:id"
            element={<EmployeeDetail />}
          ></Route>
          <Route
            path="/employee_dashboard/leave_request"
            element={<LeaveRequest />}
          ></Route>
        </Route>

        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="" element={<Home />}></Route>
          <Route path="/dashboard/employee" element={<Employee />}></Route>
          <Route path="/dashboard/category" element={<Category />}></Route>
          <Route path="/dashboard/manage_leave_request" element={<ManageLeaveRequest />}></Route>
          <Route
            path="/dashboard/add_category"
            element={<AddCategory />}
          ></Route>

          <Route
            path="/dashboard/add_employee"
            element={<AddEmployee />}
          ></Route>
          <Route
            path="/dashboard/edit_employee/:id"
            element={<EditEmployee />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
