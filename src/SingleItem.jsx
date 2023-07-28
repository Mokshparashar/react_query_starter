const SingleItem = ({ id, title, isDone }) => {
  return (
    <div className="single-item" key={id}>
      <input
        type="checkbox"
        checked={isDone}
        onChange={() => console.log("edit task")}
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
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
};
export default SingleItem;
