import { useMutation } from "@tanstack/react-query";
import customSetup from "./axios/utils";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
const SingleItem = ({ id, title, isDone }) => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => {
      return customSetup.patch(`/${taskId}`, { isDone });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
    },
  });
  const { mutate: deleteTask } = useMutation({
    mutationFn: ({ id }) => {
      return customSetup.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success(`${title} deleted successfully`, {
        position: toast.POSITION.TOP_CENTER,
      });
    },
  });

  return (
    <div className="single-item" key={id}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => editTask({ taskId: id, isDone: !isDone })}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: isDone && "line-through",
        }}
      >
        {title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask({ id })}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
