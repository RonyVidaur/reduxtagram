//a reducer takes in 2 things
//1. action (information about what happened)
//2. copy of current state

function posts(state = [], action) {
  console.log('The post will change')
  console.log(state, action)
  return state
}

export default posts