import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ManageLeaveRequest = () => {
  const [leaves, setLeaves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/auth/leave_request")
      .then((result) => {
        if (result.data.Status) {
          setLeaves(result.data.Result);
        } else {
          alert(result.data.Error);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:8000/auth/delete_leave_request/" + id)
      .then((result) => {
        console.log(result);
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
        <h3>Manage Leave Requests</h3>
      </div>

      <div className="mt-3">
        <table className="table">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Leave Type</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Reason</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {leaves.map((e) => (
              <tr key={e.id}>
                <td>{e.employeeName}</td>
                <td>{e.leaveType}</td>
                <td>{new Date(e.startDate).toLocaleDateString()}</td>
                <td>{new Date(e.endDate).toLocaleDateString()}</td>
                <td>{e.reason}</td>

                <td>
                  <Link
                    to={`/dashboard/accept_leaves/` + e.id}
                    className="btn btn-info btn-sm me-2"
                  >
                    Approve
                  </Link>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(e.id)}
                  >
                    Reject
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

export default ManageLeaveRequest;
