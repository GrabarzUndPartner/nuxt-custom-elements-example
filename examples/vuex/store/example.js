
export const state = () => ({
  count: 0
});

export const mutations = {
  increment (state) {
    state.count++;
  }
};

export const getters = {
  count (scope) {
    return scope.count;
  }
};

export const actions = {
  increment (context) {
    context.commit('increment');
  }
};
