let Id = 0;

function reducer(state = [], action) {
  switch (action.type) {
    case "BUD_ADDED":
      return [
        ...state,
        {
          id: ++Id,
          description: action.payload.description,
          resolved: false
        }
      ];

    case "BUD_REMOVED":
      return state.filter(bug => bug.id !== action.payload.id);

    case "BUD_RESOLVED":
      return state.map(bug => bug.id !== action.payload.id ? bug : { ...bug, resolved: true })

    default:
      return state;
  }
}

export default reducer;