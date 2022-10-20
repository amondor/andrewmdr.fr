import './App.css';
import memoji from './images/memoji.png'
import Highlight1 from './images/Highlight1.svg'
import Highlight2 from './images/Highlight2.svg'
import Header from './components/Navbar';

function App() {
  return (
    <>
    <Header />
    <div className='"pt-24 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary"'>
      
      <div className='md:flex-1 md:mr-10 ' >
        <h1 className="font-pt-serif text-5xl font-bold mb-7 md:mt-6">
      Hi, I'm <span className='text-sky-500 '>Andrew Mondor </span>👋🏽
      
    </h1>
    <p className="font-pt-serif font-normal mb-7 text-xl">
       I'm a French <span className='text-sky-500'>web developer </span>and I work with ReactJS and VueJS. ⚛️<br/>
       I'm also working with Laravel or Symfony frameworks 🐘.
      </p>
      <div className="font-montserrat">
        <a href="https://www.malt.fr/profile/andrewmondor" target="blank">
        <button className="bg-sky-500 px-6 py-4 rounded-lg   text-white mr-2 mb-2">
          Hire me
        </button>
        </a>
        {/* <a href=""><button className="px-6 py-4 border-2 border-gray-500 border-solid rounded-lg text-gray-500">
          Secondary action
        </button></a> */}
      </div>
    </div>
    <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
    <div className="relative">
        <img src={Highlight1} alt="" className="absolute -top-16 -left-10" />
      </div>
      <img src={memoji} alt="Memoji-andrew" />
      <div className="relative">
        <img src={Highlight2} alt="" className="absolute -bottom-10 -right-6" />
      </div>
    </div>

    </div>
    </>
    
  );
}

export default App;
