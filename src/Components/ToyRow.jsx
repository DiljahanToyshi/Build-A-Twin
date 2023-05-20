/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types

import { Link } from "react-router-dom";

const ToyRow = ({ toy, index, handleDelete }) => {
  const {
    _id,
    price,
    picture,
    // eslint-disable-next-line react/prop-types
    availableQuantity,
    // eslint-disable-next-line react/prop-types
    subCategory,
    toyName,
  } = toy;

  return (
    <tr>
      <td>{index + 1}.</td>

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
      <td>{availableQuantity}</td>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-sm btn-circle bg-indigo-300 border-indigo-700"
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
      <th>
        <Link to={`/update/${_id}`}>
          <button className="rounded-md p-3 border-2 border-indigo-500 text-indigo-500 hover:bg-indigo-500 hover:text-white  font-semibold">
            Update
          </button>
        </Link>
      </th>
    </tr>
  );
};

export default ToyRow;
