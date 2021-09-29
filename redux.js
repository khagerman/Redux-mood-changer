const INITIAL_STATE = { face: "ఠ_ఠ" };
const reduxMoodChanger = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "HAPPY":
      return { ...state, face: "(◕‿◕)" };
    case "ANNOYED":
      return { ...state, face: "◔_◔" };
    case "ANGRY":
      return { ...state, face: "ಠ_ಠ" };
    case "OVERJOYED":
      return { ...state, face: "＼(＾O＾)／" };
    case "IN_LOVE":
      return { ...state, face: "✿♥‿♥✿" };

    default:
      return state;
  }
};
const store = Redux.createStore(reduxMoodChanger);
