export default function AppReducer(state, action) {
  switch (action.type) {
    case "TOGGLE.PRO": {
      return { ...state, pro: !state.pro };
    }
    case "SET.FOLDER.NAME": {
      return { ...state, folderOpenName: action.payload };
    }
    case "SET.FOLDER": {
      return { ...state, folderOpen: action.payload };
    }
    case "TOGGLE.FOLDER.LIST": {
      return { ...state, isFolderListOpen: !state.isFolderListOpen };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
