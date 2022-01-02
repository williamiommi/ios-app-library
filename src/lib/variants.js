const distance = 1.5;
const closeIconVariant = {
  x: 0,
  y: 0,
  transition: { ease: "linear", delay: 0.2 },
};

export const appLibraryVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "linear" } },
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
    transition: { delay: 0, ease: "linear", duration: 0.3 },
  },
  close: {
    opacity: 0,
    scale: 0,
    transition: { delay: 0, ease: "linear", duration: 0.3 },
  },
};

export const nestedFolderVariants = {
  open: { scale: 1.5, transition: { ease: "linear", duration: 0.2 } },
  close: {
    scale: 1,
    transition: { ease: "linear", duration: 0.2, delay: 0.2 },
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
