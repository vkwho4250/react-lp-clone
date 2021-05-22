const movement = {
   initialY: (y) => ({ x: 0, y: y, opacity: 0 }),
   initialX: (x) => ({ x: x, y: 0, opacity: 0 }),
   slideAcross: (x) => ({ x: x, y: 0, opacity: 1 }),
   endingXY: { x: 0, y: 0, opacity: 1 },
};

const collapse = {
   close: {
      opacity: 0,
      height: 0,
      transition: { duration: 0.5 },
   },
   open: {
      opacity: 1,
      height: 30,
      transition: { duration: 0.5 },
   },
};

const fade = {
   visible: { opacity: 1 },
   hidden: { opacity: 0 },
};

const Animations = { movement, collapse, fade };

export default Animations;
