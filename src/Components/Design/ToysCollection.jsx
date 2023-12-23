/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Toys from "../Toys";
// eslint-disable-next-line react-hooks/rules-of-hooks

const ToysCollection = () => {
  const [toys, setToys] = useState([]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [showAll, setShowALl] = useState(false);
  const handleShowALl = () => {
    setShowALl(true);
  };
  useEffect(() => {
    fetch("https://assignment-11-server-phi-liard.vercel.app/toys/all")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  return (
    <div>
      <h2
        className="animate-text my-5 md:my-12 bg-gradient-to-r from-cyan-500 via-purple-500 to-blue-500 bg-clip-text text-transparent text-5xl font-black text-center"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1500"
      >
        Build A Twin's toy collection
      </h2>
      <div className="grid gap-8 lg:grid-cols-3">
        {
          // eslint-disable-next-line react/jsx-key
          toys.slice(0, showAll ? 12 : 6).map((toy) => (
            <Toys key={toy._id} toy={toy}></Toys>
          ))
        }
      </div>
      {!showAll && (
        <div className="text-center">
          <button
            onClick={handleShowALl}
            className="bg-indigo-400 sm:ml-2 my-3  text-white rounded-md px-3 py-3"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
};

export default ToysCollection;