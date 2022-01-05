import { getCenterPointsDifference } from "../../lib/utils";

export default function AppReducer(state, action) {
  switch (action.type) {
    case "SET.CENTER.COORDS": {
      return { ...state, centerCoords: action.payload };
    }
    case "SET.FOLDER.NAME": {
      return { ...state, folderOpenName: action.payload };
    }
    case "SET.FOLDER": {
      return {
        ...state,
        folderOpen: action.payload,
        distanceFromCenter: action.payload
          ? getCenterPointsDifference(state.centerCoords, {
              x: action.payload.x,
              y: action.payload.y,
            })
          : null,
      };
    }
    case "TOGGLE.FOLDER.LIST": {
      return { ...state, isFolderListOpen: !state.isFolderListOpen };
    }
    case "FILTER.APPS": {
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
