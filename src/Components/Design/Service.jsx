
const Service = () => {
  return (
    <div className="mt-16">
      <p className="m-8 text-5xl font-serif text-center text-indigo-600">
        Our Service
      </p>
      <footer className="footer p-10 text-indigo-500 ">
        <div>
          <span className="footer-title">
            <img
              className="h-28 p-5 ml-16 rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/LtTcFcX/delivery-man-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="text-center text-2xl font-sans">
            BY A CARING COURIER
          </h2>{" "}
          <p className="text-center">
            In Paris and inner suburbs, Monday to Saturday, from 1pm to 7pm
          </p>{" "}
        </div>
        <div className="mx-10">
          <span className="footer-title ">
            <img
              className="h-28 p-5 ml-16 rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/f1XyL8z/shipped-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="text-center text-2xl font-sans ml-12">
            HOME DELIVERY
          </h2>{" "}
          <p className="text-center">
            Products carefully shipped in 24h in France & in 48h in Europe
          </p>{" "}
        </div>
        <div>
          <span className="footer-title">
            <img
              className="h-28 p-5 ml-16 rounded-xl bg-indigo-700 "
              src={`https://i.ibb.co/b2K9pZ0/credit-card-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="text-center text-2xl font-sans">
            100% SECURE PAYMENT
          </h2>{" "}
          <p className="text-center">
            Support for multiple payment gateways. CB, VISA, Mastercard, Amex
          </p>{" "}
        </div>
        <div className="mx-10">
          <span className="footer-title">
            <img
              className="h-28 p-5 rounded-xl ml-16  bg-indigo-700 "
              src={`https://i.ibb.co/0JpHZCq/shop-255x255.png`}
              alt=""
            />
          </span>
          <h2 className="text-center ml-10 text-2xl font-sans">
            IN OUR STORES
          </h2>{" "}
          <p className="text-center">
            Pickup your products in our Paris, Cannes or Monaco stores
          </p>{" "}
        </div>
      </footer>
    </div>
  );
};

export default Service;
