import logo from "./../../assets/images.png";

const Footer = () => {
  return (
    <footer className="footer px-4 py-5 bg-indigo-400 text-white font-semibold mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div>
        <img className="h-20" src={logo} alt="" />
        <p>
          <span className="text-xl font-semibold"> Build A Twin</span>
          <br />
          Providing toys since 1992
        </p>
      </div>
      <div>
        <span className="footer-title ">Services</span>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
    
    </footer>
  );
};

export default Footer;
