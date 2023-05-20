import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { useNavigate } from "react-router-dom";
import ToyRow from "./ToyRow";

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [toys, setToys] = useState([]);
    const navigate = useNavigate();
    const url = `http://localhost:5000/addToys?sellerEmail=${user?.email}`;
    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (!data.error) {
            setToys(data);
          } else {
            // logout and then navigate
            navigate("/");
          }
        });
    }, [url, navigate]);



   
    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>SQ.</th>
                <th>Image</th>
                <th>Category</th>
                <th>Toy Name</th>

                <th>Price</th>
                <th>Quantity</th>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy, index) => (
                <ToyRow key={toy._id} toy={toy} index={index}></ToyRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;