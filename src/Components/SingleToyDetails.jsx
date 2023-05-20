import { useLoaderData,  useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const SingleToyDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  const toy = useLoaderData();
const {_id,availableQuantity,sellerName, description, price, picture,rating,subCategory, toyName,
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
          <p className=" text-gray-900">
            Description: {description}
          </p>
          <p className=" text-gray-900">SellerName: {sellerName}</p>
          <p className=" text-gray-900">Quantity: {availableQuantity}</p>
          <p className="mb-5 text-gray-900">Rating: {rating}</p>

          <div className="flex gap-5 mt-8 items-center">
            <button
              className="btn btn-active border-0 text-white font-semibold bg-indigo-500"
              type="submit"
            >
              Buy Now
            </button>
            <p className="items-center font-extrabold text-gray-600 ">
              Price: {price}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToyDetails;
