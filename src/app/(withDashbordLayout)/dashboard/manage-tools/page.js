"use client";
import { useState } from "react";
import Swal from "sweetalert2";
const ManageToolsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewToolData, setViewToolData] = useState(null);
  const [editToolData, setEditToolData] = useState(null);
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
  const openViewModal = (tool) => {
    setViewToolData(tool);
    document.getElementById('my_modal_view').showModal();
  };
  const openEditModal = (tool) => {
    setEditToolData(tool)
    document.getElementById('my_modal_edit').showModal();

  };

const tools = [
  {
    id: "123",
    title: "hello",
    toolDescription: "Sample description",
    shortDescription: "Short summary",
    useCase1: "Use case 1 description",
    useCase2: "Use case 2 description",
    useCase3: "Use case 3 description",
    price: 0,
    pricePlan: "DOLLARS_PER_MONTH",
    pricing: "Free",
    toolURL: "https://sample-ai-tool.com",
    toolFeature: "Key features of the tool",
    views: 0,
    aiToolBookmarkCount: 0,
    status: "PENDING",
    toolTags: ["AI", "MachineLearning", "Sample"],
    toolScreenshot: "https://sample-ai-tool.com/screenshot.png",
    createdAt: "2023-10-08T14:39:04.137Z",
    updatedAt: "2023-10-08T14:49:52.030Z",
    userId: "123",
    category: "ai-books",
    subcategories: "data-science"
  }
]

const handleUpdateStatus = (toolId)=>{
  Swal.fire({
    title: 'Do you want to save the changes?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Save',
    denyButtonText: `Don't save`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      console.log(toolId)
      Swal.fire('Saved!', '', 'success')
    } else if (result.isDenied) {
      Swal.fire('Changes are not saved', '', 'info')
    }
  })
 
}
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
              <th>updating</th>
              <th>see details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {tools? tools.map((tool,index)=><>
              <tr>
              <th>{index+1}</th>
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
                    <div className="font-bold">{tool.title}</div>
                  </div>
                </div>
              </td>
              <td>
                <a target="_blank" href={tool.toolURL} className="badge badge-ghost badge-sm">
                 Link 
                </a>
              </td>
              <td>{tool.status}</td>
              <th>
                {tool.status === 'PENDING' ? <button className="btn btn-ghost btn-xs" onClick={()=>handleUpdateStatus(tool.id)}>update status</button>:<button className="btn btn-ghost btn-xs btn-disabled" >already updated</button>}
              </th>
              <th>
                <button className="btn btn-ghost btn-xs" onClick={()=>openViewModal(tool)}>view</button>
              </th>
            
            </tr></>):<p>not tool found</p>}
          </tbody>
        </table>
      </div>
<dialog id="my_modal_view" className="modal">
  <div className="modal-box w-11/12 max-w-5xl" >
  <div className=" flex justify-center items-center">
    <div>  <p>title:{viewToolData?.title}</p>
      <p>category: {viewToolData?.category}</p>
      <p>subcategory: {viewToolData?.subcategories}</p>
      <p>Tool Description: {viewToolData?.toolDescription}</p>
      <p>short Description: {viewToolData?.shortDescription}</p>
      <p>useCase1: {viewToolData?.useCase1}</p>
      <p>use Case2: {viewToolData?.useCase2}</p>
      <p>use Case3: {viewToolData?.useCase3}</p>
      <p>price: {viewToolData?.price}</p>
      <p>pricePlan: {viewToolData?.pricePlan}</p>
      <p>pricing: {viewToolData?.pricing}</p>
      <p>tool URL: {viewToolData?.toolURL}</p>
      <p>toolFeature: {viewToolData?.toolFeature}</p>
      <p>Tool Bookmark Count: {viewToolData?.aiToolBookmarkCount}</p>
      <p>status: {viewToolData?.status}</p>
      <p>toolTags: {viewToolData?.toolTags.map(toolTag=><span key={toolTag}>#{toolTag} </span>)}</p>
      <p>views: {viewToolData?.views}</p></div>
      </div>
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    </div>
  );
};

export default ManageToolsPage;
