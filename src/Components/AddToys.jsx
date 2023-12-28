/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";

const AddToys = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  //  const [selectedOption, setSelectedOption] = useState(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://assignment-11-server-phi-liard.vercel.app/addToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire("Add a toy successfully");
          navigate("/allToys", { state: { from: location } })
        }
      });
  };

  //   console.log(user);
  return (
    <div className="">
      <h1 className="title-text pb-2 ">Add your Toy's Collection</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center md:flex gap-10 lg:gap-14 justify-center">
          {errors.exampleRequired && <span>This field is required</span>}
          <div className="w-full px-2">
            {" "}
            <div>
              {" "}
              <label  htmlFor="Toy Name" className="text-xl font-normal mb-1">Toy Name</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                {...register("Toy Name")}
                placeholder="Toy Name"
              />
            </div>
            <div className="my-4">
              {" "}
              <label className="text-xl font-normal mb-1" htmlFor="Seller Name">Seller Name</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                {...register("sellerName", { required: true })}
                placeholder="Seller Name"
              />
            </div>
            <div>
              <label className="text-xl font-normal mb-1" htmlFor="Quantity">Quantity</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                {...register("Available Quantity", { required: true })}
                placeholder="AvailableQuantity"
                type="number"
              />
            </div>
            <div className="my-4">
              {" "}
              <label className="text-xl font-normal mb-1" htmlFor="Category">Category</label> <br />
              <select className="text-input w-full p-2 rounded-sm" {...register("subCategory")}>
                <option value="Disney Princess">Disney Princess</option>
                <option value="Frozen Dolls">Frozen Dolls</option>
                <option value="Animation Characters">
                  Animation Characters
                </option>
              </select>
            </div>{" "}
          </div>
          <div className="w-full px-2">
            {" "}
            <div>
              {" "}
              <label className="text-xl font-normal mb-1" htmlFor="Picture">Picture</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                {...register("picture")}
                placeholder="picture"
                type="url"
              />
            </div>
            <div className="my-4">
              {" "}
              <label className="text-xl font-normal mb-1" htmlFor="Price">Price</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                {...register("price")}
                placeholder="price"
                type="number"
              />
            </div>
            <div>
              {" "}
              <label className="text-xl font-normal mb-1" htmlFor="Email">Email</label> <br />
              <input
                className="text-input w-full p-2 rounded-md outline-indigo-600"
                defaultValue={user?.email}
                {...register("sellerEmail")}
                type="email" readOnly
              />
            </div>
            <div className="my-4 ">
              <label className="text-xl font-normal mb-1" htmlFor="Description">Description</label> <br />
              <input
                className="text-input w-full h-20 md:h-auto outline-indigo-600 p-2 rounded-sm"
                {...register("description")}
                placeholder="description"
              />
            </div>
          </div>
        </div>
        <div className="text-center">

        <input
          className=" btn submit-btn rounded-md p-3 border-2 border-indigo-500  bg-indigo-500 text-white font-semibold "
          value="Add a toy"
          type="submit"
        />        </div>

      </form>
    </div>
  );
};

export default AddToys;
