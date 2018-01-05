export default {
  state: {
    show: false
  },
  mutations: {
    switch_dialog(state) {
      // 官方推荐都是同步
      // 处理多个state的时候 由 $store.commit('switch_dialog')来触发
      state.show = state.show ? false : true;
    }
  },
  actions: {
    // 这里可以玩异步
    switch_dialog(context) {
      // 处理多个mutation的时候 使用 $store.dispatch('switch_dialog')
      context.commit("switch_dialog");
    }
  }
};
