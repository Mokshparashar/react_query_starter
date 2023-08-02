import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import customSetup from "./axios/utils";
import { toast } from "react-toastify";

const Form = () => {
  const [newItemName, setNewItemName] = useState("");
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading } = useMutation({
    mutationFn: () => customSetup.post("/", { title: newItemName }),

    onError: (error) => {
      toast.error(error.response.data.msg, {
        position: toast.POSITION.TOP_CENTER,
      });
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("item added successfully", {
        position: toast.POSITION.TOP_CENTER,
      });
      setNewItemName("");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask();
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isLoading}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
