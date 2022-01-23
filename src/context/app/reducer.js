export default function AppReducer(state, action) {
  switch (action.type) {
    case "SET.PHONE.FRAME.CENTER.COORDS": {
      return { ...state, centerCoords: action.payload };
    }
    case "SET.FOLDER.NAME": {
      return { ...state, folderOpenName: action.payload };
    }
    case "SET.FOLDER": {
      return {
        ...state,
        folderOpen: action.payload,
      };
    }
    case "TOGGLE.FOLDER.LIST": {
      return { ...state, isFolderListOpen: !state.isFolderListOpen };
    }
    case "SET.FILTER.APPS": {
      let filteredApps = null;
      if (action.payload)
        filteredApps = state.apps.filter((app) =>
          app.name.toLowerCase().includes(action.payload.toLowerCase())
        );
      return { ...state, filteredApps };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
