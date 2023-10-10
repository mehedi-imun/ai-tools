import Image from "next/image";

const Dashboard = () => {
  return (
    <div>
      <div className="card w-full bg-secondary border ">
        <div className="card-body text-white  ">
          <div className="lg:flex justify-between ">
            <h1 className="lg:mb-0 mb-2">Welcome back mehedi imun...!</h1>
            <Image
              loading="lazy"
              width={210}
              height={0}
              src="/assets/dashboard-service.png"
            ></Image>
          </div>
        </div>
      </div>
      <div className="card   border mt-6">
        <div className="card-body">
        <div className="avatar flex justify-start">
          <div className="w-24 rounded ">
            <div className="avatar">
              <div className="w-24 rounded-full border  border-gray-600">
              <Image
              loading="lazy"
              width={210}
              height={0}
              src="/assets/dashboard-service.png"
            ></Image>
              </div>
            </div>
          </div>
        </div>
          <h2 className="card-title">Mehedi Imun</h2>
          <p>Bio: ai tool my busness.</p>
          <div className="card-actions justify-end">
            <button className="btn btn-info">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
