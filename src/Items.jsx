import SingleItem from "./SingleItem";
import customSetup from "./axios/utils";
import { useQuery } from "@tanstack/react-query";
const Items = () => {
  const { isLoading, data, isError, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: async () => {
      const { data } = await customSetup.get("/");
      return data;
    },
  });
  console.log(data);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h3>{error.response.data}</h3>;
  }
  const mainData = data.taskList;
  return (
    <div className="items">
      {mainData.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
    </div>
  );
};
export default Items;
