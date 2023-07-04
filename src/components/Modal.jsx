import { motion, AnimatePresence } from "framer-motion";
import { useModalContext } from "./ModalStateProvider";

const Modal = ({ children }) => {
  const { state, setState } = useModalContext();

  return (
    <AnimatePresence>
      {state && (
        <>
          <motion.div
            initial={{ opacity: 0, pointerEvents: "none" }}
            animate={{
              opacity: 1,
              pointerEvents: "auto",
              transition: {
                duration: 0.4,
              },
            }}
            exit={{
              opacity: 0,
              pointerEvents: "auto",
              transition: {
                delay: 0.3,
              },
            }}
            className="absolute w-full h-full top-0 left-0 bg-blue-950 dark:bg-slate-700 dark:bg-opacity-50 bg-opacity-30"
            onClick={() => setState(false)}
          ></motion.div>
          <motion.div
            initial={{ scale: 0, pointerEvents: "none" }}
            animate={{
              scale: 1,
              pointerEvents: "auto",
              transition: {
                duration: 0.4,
              },
            }}
            exit={{
              scale: 0,
              pointerEvents: "none",
              transition: {
                delay: 0.3,
              },
            }}
            className="absolute top-0 bottom-0 left-0 right-0 m-auto bg-gray-50 dark:bg-slate-800 dark:border-0 border md:w-1/2 w-11/12 p-10 rounded-lg h-fit overflow-hidden"
          >
            <motion.div
              initial={{ x: 100, opacity: 0, pointerEvents: "none" }}
              animate={{
                x: 0,
                opacity: 1,
                pointerEvents: "auto",
                transition: {
                  delay: 0.3,
                  duration: 0.3,
                },
              }}
              exit={{
                x: 100,
                opacity: 0,
                pointerEvents: "none",
                transition: {
                  duration: 0.3,
                },
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
