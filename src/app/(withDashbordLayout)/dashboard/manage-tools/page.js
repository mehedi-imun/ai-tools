"use client";
import { useState } from "react";
const ManageToolsPage = () => {
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
              placeholder="Search ai tools…"
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
              <th>Ai tool Name</th>
              <th>Tool Link</th>
              <th>status</th>
              <th>see details</th>
              <th>updating</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
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
                    <div className="font-bold">Hart Hagerty</div>
                  </div>
                </div>
              </td>
              <td>
                <a target="_blank" href="https://discord.com/invite/CCmUHTPj" className="badge badge-ghost badge-sm">
                 Link 
                </a>
              </td>
              <td>pending</td>
              <th>
                <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById('my_modal_view').showModal()}>view</button>
              </th>
              <th>
                <button className="btn btn-ghost btn-xs" onClick={()=>document.getElementById('my_modal_edit').showModal()}>Edit</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
<dialog id="my_modal_view" className="modal">
  <div className="modal-box w-11/12 max-w-5xl" >
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">

        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
<dialog id="my_modal_edit" className="modal ">
  <div className="modal-box w-11/12 max-w-5xl">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default ManageToolsPage;
