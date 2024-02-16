import title from "./assets/images/title.png";
import star from "./assets/images/star.png";
import circle from "./assets/images/circle.png";
import loading from "./assets/images/loading.png";
import festival from "./assets/images/Festival.svg";
import layer from "./assets/images/layer.png";
import banner from "./assets/images/banner.png";
import heroTitle from "./assets/images/hero2.png";
import { ArrowRight, LucideMenu, X } from "lucide-react";
import home from "./assets/icons/home.svg";
import note from "./assets/icons/note.svg";
import document from "./assets/icons/document.svg";
import { useState } from "react";
import "atropos/css";
import Atropos from "atropos/react";
import { motion } from "framer-motion";

const App = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <main className="flex lg:flex-row flex-col    gap-0 lg:justify-center  p-5 lg:overflow-hidden shadow-xl h-auto  lg:h-[95vh] mx-auto lg:my-[20px] lg:rounded-3xl">
        <section className="lg:w-[500px]  lg:h-[100vh] flex flex-col p-5 gap-5 order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="lg:h-[185px] w-full relative  hidden  newRes:flex gap-5  items-start  "
          >
            <img className="  " src={title} alt="tile" />
            <img className=" " src={star} alt="star" />
            <motion.img
              animate={{
                rotate: [0, 0, 270, 270, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
              className="absolute right-5 bottom-0 "
              src={circle}
              alt="circle"
            />
            <img className="absolute bottom-0" src={loading} alt="loading" />
          </motion.div>

          <motion.div
            animate={{
              rotate: [0, 0, 5, -5, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 3,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
            className="relative flex justify-center h-auto lg:h-[250px]"
          >
            <img className="w-full" src={banner} alt="" />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              id="btn"
              className=" p-5 text-white font-bold flex justify-between items-center absolute bottom-6 w-[88%] h-[70px] rounded-[26px] border-white border-2"
            >
              Join WhiteList <ArrowRight />
            </motion.button>
          </motion.div>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="h-full lg:h-[200px]"
            src={festival}
            alt="festival"
          />

          <img src={layer} alt="" />
        </section>
        <Atropos className="order-1 lg:order-2">
          <section
            id="hero-section"
            className=" h-[100vh] lg:w-[900px] lg:h-full flex justify-center items-start p-5  order-1 lg:order-2 "
          >
            <div className="flex flex-row w-full  gap-5 lg:gap-[50px] h-[15vh] lg:h-[20vh] justify-center  ">
              <nav className="hidden lg:block bg-slate-900 rounded-xl    lg:w-[130px] p-5 order-2 lg:order1">
                <ul className="text-white flex flex-col     lg:justify-around gap-5  h-full ">
                  <li className="hover:text-purple-300">
                    <a className="flex gap-3" href="#">
                      <img src={home} alt="home" /> Home{" "}
                    </a>
                  </li>
                  <li className="hover:text-purple-500">
                    <a className="flex gap-3" href="#">
                      {" "}
                      <img src={note} alt="pricing" /> Pricing{" "}
                    </a>
                  </li>
                  <li className="hover:text-purple-500">
                    <a className="flex gap-3" href="#">
                      {" "}
                      <img src={document} alt="tutorials" /> Tutorials{" "}
                    </a>
                  </li>
                </ul>
              </nav>
              <motion.img
                animate={{
                  rotate: [0, 0, 10, -10, 0],
                }}
                transition={{
                  duration: 10,
                  ease: "easeInOut",
                  times: [0, 0.5],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
                className="order-1 lg:order-2 w-[240px] lg:w-auto h-auto"
                src={heroTitle}
                alt="hero title"
              />
              {menu ? (
                <button
                  onClick={handleMenu}
                  className="order-2 text-white   flex lg:hidden hover:bg-purple-400 self-center"
                >
                  <LucideMenu />
                </button>
              ) : (
                <button
                  onClick={handleMenu}
                  className="order-2 text-white   flex lg:hidden hover:bg-purple-400 self-center"
                >
                  <X />
                </button>
              )}
            </div>
          </section>
        </Atropos>
      </main>
    </>
  );
};

export default App;
