// initial state can be defined by optional argument: state = 0
export default function counter(state=0, action) {
  switch(action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}


