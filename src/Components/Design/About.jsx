import img1 from "../../assets/h1.avif";
import img2 from "../../assets/h2.avif";
import img3 from "../../assets/h3.avif";
import img4 from "../../assets/h4.avif";
import img5 from "../../assets/h5.avif";
const About = () => {
  return (
    <div className="my-9">
      <p className="m-8 text-5xl font-serif text-center text-indigo-600">
        France’s No.1 Toy Brand
      </p>
      <div className="md:flex justify-between gap-4 mx-3 ">
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
