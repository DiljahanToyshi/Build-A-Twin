import { Link, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

// eslint-disable-next-line react/prop-types
const Toys = ({ toy }) => {
     const navigation = useNavigation();
     if (navigation.state === "loading") {
       return <LoadingSpinner />;
     }
  const {_id,
    price,
    picture,
    rating,
    // eslint-disable-next-line react/prop-types
    subCategory,toyName
  } = toy || {};

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
        <p className="text-gray-700 ">Rating : {rating}</p>
        <p className="text-gray-700 font-bold">Price: {price}$</p>

        <Link to={`/toys/${_id}`}>
          {" "}
          <button className="btn  block border-0 font-semibold bg-indigo-500 hover:bg-indigo-600 ">
            {" "}
            view details
          </button>
        </Link>
      </div>
    </>
  );
};

export default Toys;
