import img1 from '../assets/4.jpg';
import img2 from '../assets/5.jpg';
import img3 from '../assets/6.jpg';
import img4 from '../assets/7.jpeg';
import About from './Design/About';
const Home = () => {
    return (
      <div>
        <div className="carousel w-full m-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img4} className="w-full rounded-md h-screen" />

            <div className="absolute flex sm:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-48 mr-16 text-white ">
              <div className="  md:ml-8 space-y-7 w-1/3">
                <h2 className="text-5xl font-semibold"> Make your Twin WITH US </h2>
                <p className='font-semibold'>
                  Buy all kinds of intellectual games, toys, puzzles in our
                  online store and give your child the pleasure of love &
                  entertainment.{" "}
                </p>
                <button className="btn  btn-secondary border-0 font-semibold bg-indigo-500">
                  {" "}
                  order now{" "}
                </button>
              </div>
              <div className="flex gap-5 md:mt-64">
                <a
                  href="#slide5"
                  className="btn btn-circle border-indigo-700 bg-indigo-200 "
                >
                  ❮
                </a>
                <a
                  href="#slide2"
                  className="btn btn-circle  border-indigo-700 bg-indigo-200"
                >
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/Hz6m3Pk/download-7.jpg"
              className="w-full rounded-md h-screen"
            />
            <div className="absolute flex sm:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-48 mr-16 text-white ">
              <div className="  md:ml-8 space-y-7 w-1/3">
                <h2 className="text-5xl font-semibold"> Make your Twin WITH US </h2>
                <p className='font-semibold'>
                  Buy all kinds of intellectual games, toys, puzzles in our
                  online store and give your child the pleasure of love &
                  entertainment.{" "}
                </p>
                <button className="btn  btn-secondary border-0 font-semibold bg-indigo-500">
                  {" "}
                  order now{" "}
                </button>
              </div>
              <div className="flex gap-5 md:mt-64">
                <a href="#slide1" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❯
                </a>
              </div>
            </div>
          </div>

          <div id="slide3" className="carousel-item relative w-full">
            <img src={img1} className="w-full rounded-md h-screen" />
            <div className="absolute flex sm:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-48 mr-16 text-white ">
              <div className="  md:ml-8 space-y-7 w-1/3">
                <h2 className="text-5xl font-semibold"> Make your Twin WITH US </h2>
                <p className='font-semibold'>
                  Buy all kinds of intellectual games, toys, puzzles in our
                  online store and give your child the pleasure of love &
                  entertainment.{" "}
                </p>
                <button className="btn  btn-secondary border-0 font-semibold bg-indigo-500">
                  {" "}
                  order now{" "}
                </button>
              </div>
              <div className="flex gap-5 md:mt-64">
                <a href="#slide2" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img3} className="w-full rounded-md h-screen" />
            <div className="absolute flex sm:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-48 mr-16 text-white ">
              <div className="  md:ml-8 space-y-7 w-1/3">
                <h2 className="text-5xl font-semibold"> Make your Twin WITH US </h2>
                <p className='font-semibold'>
                  Buy all kinds of intellectual games, toys, puzzles in our
                  online store and give your child the pleasure of love &
                  entertainment.{" "}
                </p>
                <button className="btn  btn-secondary border-0 font-semibold bg-indigo-500">
                  {" "}
                  order now{" "}
                </button>
              </div>
              <div className="flex gap-5 md:mt-64">
                <a href="#slide3" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❮
                </a>
                <a href="#slide5" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❯
                </a>
              </div>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={img2} className="w-full rounded-md h-screen" />
            <div className="absolute flex sm:justify-between  gap-3 transform -translate-y-1/2 left-5 right-5 bottom-48 mr-16 text-white ">
              <div className="  md:ml-8 space-y-7 w-1/3">
                <h2 className="text-5xl font-semibold"> Make your Twin WITH US </h2>
                <p className='font-semibold'>
                  Buy all kinds of intellectual games, toys, puzzles in our
                  online store and give your child the pleasure of love &
                  entertainment.{" "}
                </p>
                <button className="btn  btn-secondary border-0 font-semibold bg-indigo-500">
                  {" "}
                  order now{" "}
                </button>
              </div>
              <div className="flex gap-5 md:mt-64">
                <a href="#slide4" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle  border-indigo-700 bg-indigo-200">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
        <About></About>
      </div>
    );
};

export default Home;