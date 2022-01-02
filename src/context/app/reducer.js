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
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}
