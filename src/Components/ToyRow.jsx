/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
// import Swal from "sweetalert2";

const ToyRow = ({ toy, handleUpdate }) => {
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
  console.log(toy);
    const handleDelete = (id) => {
      const proceed = confirm("Are You sure you want to delete");
      if (proceed) {
        fetch(`https://localhost:5000/remove/${id}`, {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            // if (data.deletedCount > 0) {
            //   Swal.fire("deleted successful");
            //   const remaining = toys.filter((toy) => toy._id !== id);
            //   setToys(remaining);
            // }
          });
      }
    };
  return (
    <tr>
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
        {status === "confirm" ? (
          <span className="font-bold text-primary">Confirmed</span>
        ) : (
          <button
            onClick={() => handleUpdate(_id)}
            className="btn btn-ghost btn-xs"
          >
            Update
          </button>
        )}
      </th>
    </tr>
  );
};

export default ToyRow;
