import { useEffect, useState } from "react";
import Toys from "./Toys";
import {  useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const navigation = useNavigation();
  const [searchText,setsearchText] = useState("");
  if (navigation.state === "loading") {
    return <LoadingSpinner />
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);


  const handleSearch =() => {
    fetch(`http://localhost:5000/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
  };

  return (
    <div>
      <div className="form-control">
        <div className="input-group m-4 md:ml-96">
          <input
            onChange={(e) => setsearchText(e.target.value)}
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button onClick={handleSearch} className="btn btn-square bg-indigo-600">
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid gap-8 lg:grid-cols-3">
        {
          // eslint-disable-next-line react/jsx-key
          toys.map((toy) => (
            <Toys key={toy._id} toy={toy}></Toys>
          ))
        }
      </div>
    </div>
  );
};

export default AllToys;