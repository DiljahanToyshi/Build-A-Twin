import { useEffect, useState } from "react";
import Toys from "./Toys";
import {  useNavigation } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const AllToys = () => {
  const [toys, setToys] = useState([]);
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoadingSpinner />
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    fetch('http://localhost:5000/toys')
      .then((res) => res.json())
      .then((data) => setToys(data));
  }, []);
    console.log(toys);

  return (
    <div>
      {/* <div className="text-center my-8">
        <li>
          <NavLink
            to="/allToys"
            className="text-blue-700 text-xl font-semibold "
          >
            <select {...register("category")}>
              <option
                onSubmit={() => handletabClick("Disney Princess")}
                value="Disney Princess"
              >
                Disney Princess
              </option>
              <option
                onClick={() => handletabClick("Frozen Dolls")}
                value="Frozen Dolls"
              >
                Frozen Dolls
              </option>
              <option value="Animation Characters">Animation Characters</option>
              <option value="others">others</option>
              <option value="All toys">All toys</option>
            </select>
          </NavLink>
        </li>
      </div> */}
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