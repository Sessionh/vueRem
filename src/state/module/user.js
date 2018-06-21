
const user = {
  state: {},
  mutations: {
    logout (state, vm) {
      localStorage.removeItem('users');
    }
  }
};

export default user;
