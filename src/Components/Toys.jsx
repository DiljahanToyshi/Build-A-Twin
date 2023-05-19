
// eslint-disable-next-line react/prop-types
const Toys = ({ toy }) => {
  const {
    availableQuantity,
    description,
    price,
    picture,
    rating,
    // eslint-disable-next-line react/prop-types
    subCategory,toyName
  } = toy;
console.log(toy)
  return (
    <>
      <div className="bg-gray-100 p-6 rounded shadow-lg">
        <img
          className=" w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80"
          src={picture}
          alt=""
        />
        <p className="mb-2 text-xl font-bold leading-none sm:text-2xl">
          {toyName}
        </p>
        <p className="text-gray-700 ">Category: {subCategory}</p>
        <p className="text-gray-700 font-bold">Price: {price}$</p>

        <button className="btn  btn-secondary block border-0 font-semibold bg-indigo-500">
          {" "}
          order now{" "}
        </button>
      </div>
    </>
  );
};

export default Toys;
