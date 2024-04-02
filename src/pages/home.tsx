import { FaBullhorn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/*First Container*/}
      <div className="w-screen h-screen">
        <div className="bg-[url('./assets/backgroundCodeploy.png')] w-full h-full bg-cover bg-no-repeat grid grid-cols-12 grid-rows-12">
          <div className="flex flex-col col-start-4 col-span-6 row-start-4 row-span-6 border-2 bg-white-custom/75 rounded-3xl justify-center items-center gap-10">
            <p className="text-[45px] font-bold text-blue-night-custom">
              Inizia la riunione
            </p>
            <Link to="/timer">
              <button className="border-2 px-7 py-2 rounded-2xl border-blue-night-custom cursor-pointer hover:bg-blue-night-custom">
                <p className="flex flex-row items-center gap-4 text-blue-night-custom font-bold hover:text-white-custom">
                  Clicca per iniziare
                  <FaBullhorn />
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
