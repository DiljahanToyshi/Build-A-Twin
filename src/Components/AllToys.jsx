import { useEffect, useState } from "react";
import Toys from "./Toys";
import { useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const AllToys = () => {
  const [toys, setToys] = useState([]);

  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch("http://localhost:5000/toys")
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
  
  return (
    <div className="grid fap-8 lg:grid-cols-3">
     
      {
        // eslint-disable-next-line react/jsx-key
        toys.map((toy) => (
          <Toys key={toy._id} toy={toy}></Toys>
        ))
      }
    </div>
  );
};

export default AllToys;