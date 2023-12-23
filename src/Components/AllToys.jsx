import { useEffect, useState } from "react";
import Toys from "./Toys";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";
import { Helmet } from 'react-helmet-async';

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState("");
  const [searchText, setsearchText] = useState("");
  if (navigation.state === "loading") {
    return <LoadingSpinner />;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch(
      `https://assignment-11-server-phi-liard.vercel.app/toys/${activeTab} `
    )
      .then((res) => res.json())
      .then((data) => setToys(data));
      
}, [activeTab])


  const handleCategory = (tabName) => {
    setActiveTab(tabName);

  };

  
  const handleSearch = () => {
    fetch(`https://assignment-11-server-phi-liard.vercel.app/getToysByText/${searchText}`)
      .then((res) => res.json())
      .then((data) => setToys(data));
   
  };

  return (
    <div>
      <Helmet>
        <title>All Toys</title>
      </Helmet>
      <div className="form-control">
  <div className="input-group m-4 sm:w-full md:w-3/4 lg:w-1/2 xl:w-1/3 mx-auto">
    <input
      id="search"
      onChange={(e) => setsearchText(e.target.value)}
      type="text"
      placeholder="Search…"
      className="input input-bordered w-full"
    />
    <button
      onClick={handleSearch}
      className="btn btn-square bg-indigo-600 mr-5 md:mr-14 "
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
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </button>
  </div>
</div>
      <div className="md:text-center mx-auto mb-5">
        <span className=" ml-2 text-2xl font-semibold text-indigo-600">
          Category By :{" "}
        </span>
        <button
          onClick={() => handleCategory("Princess")}
          className={`p-1 py-2 md:p-3 my-2 rounded-md text-indigo-700 border-0 font-semibold hover:text-white hover:bg-indigo-500 transition duration-300 ${
            activeTab == "Princess"
              ? "bg-indigo-500  text-white"
              : "bg-white"
          }`}
          type="submit"
        >
          Disney Princess
        </button>
        <div
          onClick={() => handleCategory("Dolls")}
          className={`btn p-1 md:p-3 btn-active border-0 mx-3 font-semibold hover:text-white hover:bg-indigo-500 transition duration-300 ${
            activeTab == "Dolls"
              ? "bg-indigo-500  text-white"
              : "bg-white text-indigo-700"
          }`}
          type="submit"
        >
          Frozen Dolls
        </div>
        <div
          onClick={() => handleCategory("Characters")}
          className={`btn p-1 md:p-3  btn-active border-0 font-semibold hover:text-white hover:bg-indigo-500 transition duration-300 ${
            activeTab == "Characters"
              ? "bg-indigo-500  text-white"
              : "bg-white text-indigo-700"
          }`}
          type="submit"
        >
          Animation Characters
        </div>
        <div
          onClick={() => handleCategory("all")}
          className={`btn p-1 md:p-3 ml-3 my-2 text-indigo-700 border-0 font-semibold hover:text-white hover:bg-indigo-500 transition duration-300 ${
            activeTab == "princess" ? "bg-indigo-500  text-white" : "bg-white"
          }`}
          type="submit"
        >
          All Toys
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
