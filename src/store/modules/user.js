import firebase from 'firebase/app';
import mixpanel from "mixpanel-browser";

export const strict = false;

export const getters = {
  isAuthenticated: (state) => !!state.user,
  userProfileImage: (state) =>
    (state.profile && state.profile.avatar_path) || state.user.photoURL || '/Profile_default.png',
  loggedUser: (state) => state.user,
  userName: (state) => {
    if (state.user && state.user.displayName) {
      const splitedName = state.user.displayName.trim().split(' ');
      const firstName = splitedName.slice(0, 1).join(' ');
      const lastName = splitedName.slice(-1).join(' ');
      if (splitedName.length === 1) return firstName;
      return `${firstName} ${lastName}`;
    }
    return '';
  },
  userProfile: (state) => state.profile,
  displayName: (state) => state.user.displayName,
};

export const mutations = {
  SET_USER(state, payload) {
    state.user = payload;
  },
  SET_PROFILE(state, payload) {
    state.profile = payload;
  },
};

export const actions = {
  async logIn({ dispatch }, user) {
    let userJSON = user.toJSON();

    await dispatch('setUser', userJSON);

    return location.reload();
  },
  logInWithEmailAndPassword({ dispatch }, payload) {
    return this.$firebaseAuth
      .signInWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        const user = this.$firebaseAuth.currentUser;
        dispatch('logIn', user);
      })
      .catch((error) => {
        throw error;
      });
  },

  async logOut({ commit }) {
    this.$cookiz.removeAll();
    this.$firebaseAuth.signOut();
    commit('SET_USER', null);
    location.reload();
  },
  // async logOutWithOutReload({ commit }) {
  //   this.$firebaseAuth.signOut();
  //   this.$cookiz.removeAll();
  //   commit('SET_USER', null);
  //   commit('SET_PROFILE', null);
  // },

  setUser({ commit }, payload) {
    if (payload !== null) {
      this.$cookiz.set('user', payload, { maxAge: 60 * 60 * 5, path: '/' });
    }
    commit('SET_USER', payload);
  },
  
};
export const state = () => ({
  user: null,
});
