import data from "../../mock";

const state = {
  alphabet: data.alphabet,
  folders: data.folders,
  apps: data.apps,
  appsDict: data.appsDict,
  filteredApps: null,
  folderOpenName: null,
  folderOpen: null,
  isFolderListOpen: false,
};

export default state;
