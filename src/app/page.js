import { fetchTools } from "@/actions/fetch-tool";
import Banner from "@/components/Banner/Banner";
import Filter from "@/components/Filter/Filter";
import AiCard from "@/components/Shared/AiCard";
import { LoadMore } from "@/components/Shared/load-more";

const HomePage = async () => {
  const tools = await fetchTools(1);
  return (
    <div>
      <Banner></Banner>
      <Filter />
      <div>
        <AiCard tools={tools}></AiCard>
        <LoadMore></LoadMore>
      </div>
    </div>
  );
};

export default HomePage;
