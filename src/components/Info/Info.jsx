import { motion } from 'framer-motion';
import { useRenderStore } from '../../store/storeWorld';
import '../../styles/info.css';

const Info = ({ name, biography }) => {
  const setIsInfoOpened = useRenderStore((state) => state.setIsInfoOpened);

  return (
    <div className="container-info">
      <motion.section
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
            delay: 0.6,
          },
        }}
      >
        <h1 className="text-6xl font-extrabold leading-snug ">
          <span className="bg-white">Hi, I'm</span>
          <br />
          <span className="bg-white px-1 italic">{name}</span>
        </h1>
        <motion.p
          className="text-lg text-black p-4 rounded-lg bg-white mt-4"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 1.5,
          }}
        >
          {biography}
        </motion.p>
        <motion.a
          href="https://github.com/Carlosher007"
          className="button"
          target="_blank"
          rel="noopener noreferrer"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2,
          }}
        >
          <button
            className={`bg-indigo-600 text-white py-4 px-8 
      rounded-lg font-bold text-lg mt-16`}
          >
            My Github
          </button>
        </motion.a>
      </motion.section>
    </div>
  );
};

export default Info;
