const distance = 1.5;
const transition = { ease: "linear" };
const closeVariant = { x: 0, y: 0, transition };

export const appLibraryVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  close: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

export const folderDetailVariants = {
  open: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  close: { opacity: 0, scale: 0, transition: { duration: 0.2 } },
};

export const nestedFolderVariants = {
  open: { scale: 2 },
  close: { scale: 1 },
};

export const iconVariants = [
  {
    open: { x: distance * -1, y: distance * -1, transition },
    close: closeVariant,
  },
  {
    open: { x: distance, y: distance * -1, transition },
    close: closeVariant,
  },
  {
    open: { x: distance * -1, y: distance, transition },
    close: closeVariant,
  },
  {
    open: { x: distance, y: distance, transition },
    close: closeVariant,
  },
];
