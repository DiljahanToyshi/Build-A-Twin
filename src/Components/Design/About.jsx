import img1 from "../../assets/h1.avif";
import img2 from "../../assets/h2.avif";
import img3 from "../../assets/h3.avif";
import img4 from "../../assets/h4.avif";
import img5 from "../../assets/h5.avif";
const About = () => {
  return (
    <div className="md:my-12 lg:my-16">
      <p
     className="title-text"
     data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1500"
      >
        France’s No.1 Toy Brand
      </p>
      <div className="grid gap-2 grid-cols-3 md:grid-cols-5 ">
        <img className="h-32 rounded-xl " src={img1} alt="" />
        <img className="h-32 rounded-xl " src={img2} alt="" />
        <img className="h-32 rounded-xl " src={img3} alt="" />
        <img className="h-32 rounded-xl " src={img4} alt="" />
        <img className="h-32 rounded-xl " src={img5} alt="" />
      </div>
    </div>
  );
};

export default About;
