export const strict = false;
export const state = () => ({});

export const getters = {};

export const mutations = {};

export const actions = {
  async nuxtServerInit({ dispatch, commit }, { app, redirect }) {
    const user = app.$cookiz.get('user');
    if (user) {
      await commit('modules/user/SET_USER', user);
      // TODO: Add setProfile on modules/user.
      await dispatch('modules/user/setProfile');
      redirect('/dashboard'); // Verify this redirect.
    } else {
      redirect('/login');
    }
  },
};
