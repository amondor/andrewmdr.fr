import "./App.css";
import profile from "./images/andrewmondor.jpg";
import Navbar from "./components/Navbar";
import Moncv from "./documents/resume_andrewmondor.pdf";

function App() {
  return (
    <>
      <div className="align-center mx-auto flex max-w-7xl flex-col  px-8  profile   ">
        <Navbar />
        <div className="max-w-7xl    place-items-center  flex flex-col  md:text-left md:flex-row md:justify-between lg:px-48 md:px-12 px-4 bg-secondary">
          <div className="md:flex-1 md:mr-10 ">
            <h1 className="font-pt-serif font-bold  text-3xl md:text-5xl mb-7 md:mt-6">
              Andrew Mondor <br />
            </h1>
            <h2 className="ext-gray-700 mb-4 ">
              Freelance Fullstack{" "}
              <span className="font-semibold text-sky-600 ">
                {" "}
                Web Developer
              </span>{" "}
            </h2>
            <p className="font-pt-serif font-normal  t mb-8">
              Freelancer providing services for programming and design content
              needs. <br />
              My playground is React JS and NodeJS. Join me down below !
            </p>
            <div className="font-montserrat">
              <a href="https://www.malt.fr/profile/andrewmondor" target="blank">
                <button className="bg-zinc-600 px-6 py-4 rounded-lg   text-white mr-2 mb-2">
                  Hire me
                </button>
              </a>

              <a href={Moncv} target="blank">
                <button
                  className="bg-sky-600 px-6 py-4  hover:bg-zinc-900 text-white hover:text-white hover:border-transparent px-6 py-4 rounded-lg text-white mr-2 mb-2"
                  download="Resume - Andrew mondor"
                >
                  CV
                </button>
              </a>
              {/* <a href=""><button className="px-6 py-4 border-2 border-gray-500 border-solid rounded-lg text-gray-500">
          Secondary action
        </button></a> */}
            </div>
          </div>
          <div className=" flex justify-center items-center">
            <img
              src={profile}
              alt="Memoji-andrew"
              width="146"
              className="rounded-xl filter grayscale justify-center "
            />
          </div>
        </div>
      </div>
      {/* <Projects/> */}
    </>
  );
}

export default App;
