import data from "../../mock";

const state = {
  pro: true,
  folders: data.folders,
  apps: data.apps,
  appsDict: data.appsDict,
  filteredApps: null,
  folderOpenName: null,
  folderOpen: null,
  isFolderListOpen: false,
};

export default state;
