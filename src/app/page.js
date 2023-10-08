import Banner from "@/components/Banner/Banner";
import Filter from "@/components/Filter/Filter";
import AiCard from "@/components/Shared/AiCard";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Filter/>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1  gap-12 mx-auto ">
        <AiCard></AiCard>
      </div>
    </div>
  );
};

export default HomePage;
