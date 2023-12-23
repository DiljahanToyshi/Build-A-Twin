import { useLoaderData, useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { useEffect } from "react";

const SingleToyDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const toy = useLoaderData();
  const {
  
    availableQuantity,
    sellerName,
    description,
    price,
    picture,
    rating,
    toyName,
  } = toy;

  return (
    <div className="my-container">
      {/* Container Box */}
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-white border rounded shadow-sm lg:flex-row sm:mx-auto">
        {/* Image Container */}
        <div className=" lg:w-1/2 h-full">
          <img
            src={picture}
            alt="book cover"
            className="object-cover w-full  lg:h-full"
          />
        </div>
        {/* Details Container */}
        <div className=" p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
            <p className="badge bg-indigo-300 border-indigo-800">Brand new</p>
          </div>
          <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl">
            {toyName}
          </h5>
          <p className=" text-gray-900 font-medium">
            <span className="font-bold text-indigo-800">Description:</span>{" "}
            {description}
          </p>
          <p className=" text-gray-900 font-medium">
            <span className="font-bold text-indigo-800">SellerName:</span>{" "}
            {sellerName}
          </p>
          <p className=" text-gray-900 font-medium">
            <span className="font-bold text-indigo-800">Rating: </span> {rating}
          </p>

          <div className="flex gap-5  items-center">
            <p className=" text-gray-900 font-medium">
              <span className="font-bold text-indigo-800">Quantity:</span>{" "}
              {availableQuantity}
            </p>

            <p className="items-center font-medium text-gray-600 ">
              <span className="font-bold text-indigo-800">Price:</span> {price} $
            </p>
          </div>
          <button
            className="btn btn-active border-0 text-white font-semibold mt-4 bg-indigo-500 hover:bg-indigo-600"
            
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
