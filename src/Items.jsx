import SingleItem from "./SingleItem";
import customSetup from "./axios/utils";
import { useQuery } from "@tanstack/react-query";
const Items = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => customSetup.get("/"),
  });
  const maindata = data.data.taskList;
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="items">
      {maindata.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
    </div>
  );
};
export default Items;
