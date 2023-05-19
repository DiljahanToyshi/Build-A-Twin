const ToyRow = ({ toy, handleDelete, handleAddingConfirm }) => {
 const {
   _id,
   price,
   picture,
  
   // eslint-disable-next-line react/prop-types
   subCategory,
   toyName,
 } = toy;
  return (
    <tr>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="avatar">
          <div className="rounded w-24 h-24">
            {picture && (
              <img src={picture} alt="Avatar Tailwind CSS Component" />
            )}
          </div>
        </div>
      </td>
      <td>{subCategory}</td>
      <td>{toyName}</td>
      <td>${price}</td>
      <th>
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleAddingConfirm(_id)}
            className="btn btn-ghost btn-xs"
          >
            Please Confirm
          </button>
        )}
      </th>
    </tr>
  );
};

export default ToyRow;
