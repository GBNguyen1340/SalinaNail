const Comment = ({ author, text }) => {
  return (
    <div className="p-4">
      <h3 className="text-lg font-bold mb-2">{author}</h3>
      <p className="text-gray-700 font-light">{text}</p>
    </div>
  );
};

export default Comment;