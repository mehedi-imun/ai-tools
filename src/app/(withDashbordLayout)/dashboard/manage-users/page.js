"use client";
import { useState } from "react";
const ManageUserPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const applyFilters = () => {
    const queryParams = [];

    if (searchQuery) {
      queryParams.push(`searchTerm=${searchQuery}`);
    }

    const apiUrl = `/api/tools${
      queryParams.length > 0 ? `?${queryParams.join("&")}` : ""
    }`;
    console.log(apiUrl);
  };
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter" && event.target.name === "searchTerm") {
      applyFilters();
    }
  };
  const handleSearchButtonClick = () => {
    applyFilters();
  };
  const users = [
    {
      id: "123",
      name: "jon",
      email: "jon@gmail.com",
      role: "USER",
    },
    {
      id: "1f23",
      name: "jon2",
      email: "j2on@gmail.com",
      role: "ADMIN",
    },
  ];
  return (
    <div>
      <div className="form-control w-full mb-4">
        <div className="input-group bg-transparent input focus:outline-none border-gray-300 ">
          <input
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            name="searchTerm"
            type="text"
            placeholder="Search users…"
            className="w-full  p-2"
          />
          <button
            onClick={handleSearchButtonClick}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email </th>
              <th>Role</th>
              <th>manage role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users ? (
              users.map((user, index) => (
                <>
                  <tr>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src="https://www.cnet.com/a/img/resize/9a13e1e92a7b66cbff9db2934b3f66bf01a4afb6/hub/2023/08/24/821b0d86-e29b-4028-ac71-ef63ca020de8/gettyimages-1472123000.jpg?auto=webp&fit=crop&height=675&width=1200"
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{user.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                    <th>
                      {user.role === "USER" ? (
                        <button className="btn btn-ghost btn-xs">
                          Make admin{" "}
                        </button>
                      ) : (
                        <button className="btn btn-ghost btn-xs">
                          Remove admin{" "}
                        </button>
                      )}
                    </th>
                  </tr>
                </>
              ))
            ) : (
              <p>not user found</p>
            )}
          </tbody>
        </table>
      </div>
      <div className="join grid grid-cols-2 w-60 mx-auto mt-6">
        <button className="join-item btn btn-outline hover:btn-secondary">
          Previous page
        </button>
        <button className="join-item btn btn-outline hover:btn-secondary">
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageUserPage;
