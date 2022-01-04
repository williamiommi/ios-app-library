const distance = 10;
const closeIconVariant = {
  x: 0,
  y: 0,
  transition: { ease: "linear", delay: 0 },
};

export const appLibraryVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: "linear" } },
  close: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.2, ease: "linear", delay: 0.1 },
  },
};

export const folderDetailVariants = {
  open: {
    x: 0,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { delay: 0, ease: "linear", duration: 0.2 },
  },
  close: {
    opacity: 0,
    scale: 0,
    transition: { delay: 0, ease: "linear", duration: 0.2 },
  },
};

export const nestedFolderVariants = {
  open: { scale: 1.5, transition: { ease: "linear", duration: 0.2 } },
  close: {
    scale: 1,
    transition: { ease: "linear", duration: 0.2, delay: 0 },
  },
};

export const iconVariants = [
  {
    open: {
      x: distance * -1,
      y: distance * -1,
      transition: { ease: "linear", duration: 0.2 },
    },
    close: closeIconVariant,
  },
  {
    open: {
      x: distance,
      y: distance * -1,
      transition: { ease: "linear", duration: 0.2 },
    },
    close: closeIconVariant,
  },
  {
    open: {
      x: distance * -1,
      y: distance,
      transition: { ease: "linear", duration: 0.2 },
    },
    close: closeIconVariant,
  },
  {
    open: {
      x: distance,
      y: distance,
      transition: { ease: "linear", duration: 0.2 },
    },
    close: closeIconVariant,
  },
];

export const folderListVariants = {
  open: {
    opacity: 1,
    pointerEvents: "auto",
    transition: { ease: "linear", duration: 0.2 },
  },
  close: {
    opacity: 0,
    pointerEvents: "none",
    transition: { ease: "linear", duration: 0.2 },
  },
};

export const inputSearchBlockVariants = {
  close: {
    width: "100%",
    transition: { ease: "linear", duration: 0.2, delay: 0 },
  },
  open: { width: "88%", transition: { ease: "linear", duration: 0.2 } },
};

export const inputSearchWrapperVariants = {
  close: {
    left: "50%",
    x: "-50%",
    transition: { ease: "linear", duration: 0.2, delay: 0 },
  },
  open: {
    left: "10px",
    x: 0,
    transition: { ease: "linear", duration: 0.2 },
  },
};

export const inputSearchVariants = {
  close: {
    width: "76px",
    transition: { ease: "linear", duration: 0, delay: 0 },
  },
  open: {
    width: "100%",
    transition: { ease: "linear", duration: 0, delay: 0.2 },
  },
};

export const inputSearchCancelVariants = {
  close: {
    opacity: 0,
    right: 0,
    x: "150%",
    transition: { ease: "linear", duration: 0.2 },
  },
  open: {
    opacity: 1,
    right: 0,
    x: 10,
    transition: { ease: "linear", duration: 0.2 },
  },
};
