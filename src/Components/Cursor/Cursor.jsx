//& Import modules
import { motion } from 'framer-motion';

// import './Cursor.scss';

const Cursor = ({ variantsOuter, variantsInner, cursorAnimation }) => {
  return (
    <>
      <motion.div className={`cursorOuter`} variants={variantsOuter} animate={cursorAnimation} />

      <motion.div className={`cursorInner`} variants={variantsInner} animate={cursorAnimation} />
    </>
  );
};

export default Cursor;
