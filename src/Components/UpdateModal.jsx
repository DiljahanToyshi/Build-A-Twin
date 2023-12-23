/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";

import { AuthContext } from "../providers/Authprovider";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";

const UpdateModal = (props) => {
  const { user } = useContext(AuthContext);
  const toy = useLoaderData();
  const {
    _id,
    price,
    sellerName,
    picture,
    description,
    // eslint-disable-next-line react/prop-types
    availableQuantity,
    // eslint-disable-next-line react/prop-types
    toyName,
  } = toy;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {

    fetch(`https://assignment-11-server-phi-liard.vercel.app/update/${_id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Add a toy successfully");
        }
      });
  };

  return (
    <div className="add-job-container">
      <p className="sm:text-2xl md:text-4xl font-bold text-indigo-600 text-center my-3 md:my-6">
        Update your toy!!
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="md:flex gap-14 justify-center">
          {errors.exampleRequired && <span>This field is required</span>}
          <div>
            <div>
              {" "}
              <label htmlFor="toyName">ToyName</label> <br />
              <input
                className="text-input"
                {...register("toyName")}
                placeholder="toyName"
                defaultValue={toyName}
              />
            </div>
            <div className="my-4">
              {" "}
              <label htmlFor="sellerName">sellerName</label> <br />
              <input
                className="text-input"
                {...register("sellerName", { required: true })}
                placeholder="sellerName"
                defaultValue={sellerName}
              />
            </div>
            <div>
              <label htmlFor="Quantity">Quantity</label> <br />
              <input
                className="text-input"
                {...register("availableQuantity", { required: true })}
                placeholder="availableQuantity"
                type="number"
                defaultValue={availableQuantity}
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
                defaultValue={picture}
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
                defaultValue={price}
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
                placeholder={description}
              />
            </div>
          </div>
        </div>
        <div className="text-center">
          <input
            className=" btn submit-btn rounded-md p-3 border-2 border-indigo-500  bg-indigo-500 text-white  font-semibold md:ml-96"
            value="Add a toy"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateModal;
