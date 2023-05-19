import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../providers/Authprovider";
import { useNavigate } from "react-router-dom";

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

  const handleDelete = (id) => {
    const proceed = confirm("Are You sure you want to delete");
    if (proceed) {
      fetch(`https://car-doctor-server-smoky.vercel.app/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful");
            const remaining = toys.filter((toy) => toy._id !== id);
            setToys(remaining);
          }
        });
    }
    }

     const handleAddingConfirm = id => {
        fetch(`https://car-doctor-server-smoky.vercel.app/addToys/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = toys.filter(toy => toy._id !== id);
                    const updated =toys.find(toy => toy._id === id);
                    updated.status = 'confirm'
                    const newToys = [updated, ...remaining];
                    setToys(newToys);
                }
            })
  };
    return (
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Image</th>
                <th>Service</th>
                <th>Date</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {toys.map((toy) => (
                <BookingRow
                  key={toy._id}
                  toy={toy}
                  handleDelete={handleDelete}
                  handleAddingConfirm={handleAddingConfirm}
                ></BookingRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyToys;