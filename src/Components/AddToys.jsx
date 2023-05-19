/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";
 

const AddToys = () => {
  const { user } = useContext(AuthContext);
//  const [selectedOption, setSelectedOption] = useState(null);
const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
        console.log(data);

    fetch("http://localhost:5000/postToys", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result)
        if (result.insertedId)
        {Swal.fire("Add a toy successfully")}
      })
   ;

  };
 
  //   console.log(user);
  return (
    <div className="add-job-container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-14 justify-center">
          {errors.exampleRequired && <span>This field is required</span>}
          <div>
            {" "}
            <div>
              {" "}
              <label htmlFor="toyName">ToyName</label> <br />
              <input
                className="text-input"
                {...register("toyName")}
                placeholder="toyName"
                defaultValue="Web developer"
              />
            </div>
            <div className="my-4">
              {" "}
              <label htmlFor="sellerName">sellerName</label> <br />
              <input
                className="text-input"
                {...register("sellerName", { required: true })}
                placeholder="sellerName"
                defaultValue="alu"
              />
            </div>
            <div>
              <label htmlFor="Quantity">Quantity</label> <br />
              <input
                className="text-input"
                {...register("availableQuantity", { required: true })}
                placeholder="availableQuantity"
                type="number"
              />
            </div>
            <div className="my-4">
              {" "}
              <label htmlFor="Category">Category</label> <br />
              <select className="text-input" {...register("subCategory")}>
                <option value="Disney Princess">Disney Princess</option>
                <option value="Frozen Dolls">Frozen Dolls</option>
                <option value="Animation Characters">
                  Animation Characters
                </option>
              </select>
            </div>{" "}
          </div>
          <div>
            {" "}
            <div>
              {" "}
              <label htmlFor="Picture">Picture</label> <br />
              <input
                className="text-input"
                {...register("picture")}
                placeholder="picture"
                type="url"
                defaultValue="https://images.pexels.com/photos/2528118/pexels-photo-2528118.jpeg?auto=compress&cs=tinysrgb&w=600"
              />
            </div>
            <div className="my-4">
              {" "}
              <label htmlFor="Price">Price</label> <br />
              <input
                className="text-input"
                {...register("price")}
                placeholder="price"
                type="number"
              />
            </div>
            <div>
              {" "}
              <label htmlFor="Email">Email</label> <br />
              <input
                className="text-input"
                defaultValue={user?.email}
                {...register("sellerEmail")}
                placeholder="your email"
                type="email"
              />
            </div>
            <div className="my-4">
              <label htmlFor="Description">Description</label> <br />
              <input
                className="text-input"
                {...register("description")}
                placeholder="description"
              />
            </div>
          </div>
        </div>
        <input
          className=" btn submit-btn rounded-md p-3 border-2 border-indigo-500  bg-indigo-500 text-white  font-semibold md:ml-96"
          value="Add a toy"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddToys;
