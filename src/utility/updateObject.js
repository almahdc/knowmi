export const updateObject = (oldState, newState) => {
  console.log("old, new", oldState, newState);
  return {
    ...oldState,
    ...newState
  }
}
