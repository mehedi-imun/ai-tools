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
      
    </div>
  );
};

export default Dashboard;
