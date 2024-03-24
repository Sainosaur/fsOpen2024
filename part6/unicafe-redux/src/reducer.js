const initialState = {
  good: 0,
  ok: 0,
  bad: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'GOOD':
      let newState = {
        ...state,
        good: state.good + 1
      }
      return newState
    case 'OK':
      let newState1 = {
        ...state,
        ok: state.ok + 1
      }
      return newState1
    case 'BAD':
      let newState2 = {
        ...state,
        bad: state.bad + 1
      }
      return newState2
    case 'ZERO':
      return {
        good: 0,
        ok: 0,
        bad: 0
      }
    default: return state
  }
  
}

export default counterReducer
