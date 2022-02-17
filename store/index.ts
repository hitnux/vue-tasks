import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [
        {
          id: 2,
          name: 'Hit nux'
        }
      ],
      user: 2
    }
  })
}

export default createStore