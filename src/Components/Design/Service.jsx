
const Service = () => {
  return (
    <div className="my-10 lg:my-16">
      <p className="title-text"
        data-aos-easing="ease-out-cubic"
        >
        Our Service
      </p>
   
      <footer
        className="footer mx-2 text-indigo-500 grid gap-8 grid-cols-2 md:grid-cols-4"
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div className="">
          <span className="footer-title mx-auto">
            <img
              className="h-28  rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/LtTcFcX/delivery-man-255x255.png`}
              alt="img"
            />
          </span>
          <p className="md:mx-auto text-lg md:text-2xl font-normal">
            BY A CARING COURIER
          </p>{" "}
          <p >
            In Paris and inner suburbs, Monday to Saturday, from 1pm to 7pm
          </p>{" "}
        </div>
        
        <div>
          <span className="footer-title mx-auto">
            <img
              className="h-28 rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/b2K9pZ0/credit-card-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="md:mx-auto text-lg md:text-2xl font-normal">
            100% SECURE PAYMENT
          </h2>{" "}
          <p className="">
            Support for multiple payment gateways. CB, VISA, Mastercard, Amex
          </p>{" "}
        </div>
        <div className="">
          <span className="footer-title mx-auto">
            <img
              className="h-28  rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/f1XyL8z/shipped-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="md:mx-auto text-lg md:text-2xl font-normal">
            HOME DELIVERY
          </h2>{" "}
          <p className="">
            Products carefully shipped in 24h in France & in 48h in Europe
          </p>{" "}
        </div>
        <div className="">
          <span className="footer-title mx-auto">
            <img
              className="h-28 rounded-xl  bg-indigo-700 "
              src={`https://i.ibb.co/0JpHZCq/shop-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="md:mx-auto text-lg md:text-2xl font-normal">
            IN OUR STORES
          </h2>{" "}
          <p className="">
            Pickup your products in our Paris, Cannes or Monaco stores
          </p>{" "}
        </div>
      </footer>
    </div>
  );
};

export default Service;
