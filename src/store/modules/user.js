// import firebase from 'firebase/app';
// import mixpanel from "mixpanel-browser";

export const strict = false;

export const getters = {
  
  isAuthenticated: (state) => !!state.user,
  
  userProfileImage: (state) =>
    (state.profile && state.profile.avatar_path) || state.user.photoURL || '/Profile_default.png',

  
  machineId: (state) => state.profile.machineId,
  
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

  register({ dispatch }, payload) {
    const userRef = this.$firestore.collection('users').doc(payload.machineId);

    userRef.set({
      name: payload.name,
      email: payload.email,
      machine_id: payload.machineId
    });

    return location.reload();
  },

  registerWithEmailAndPassword({ dispatch }, payload) {
    return this.$firebaseAuth
      .createUserWithEmailAndPassword(payload.email, payload.password)
      .then(() => {
        let user = this.$firebaseAuth.currentUser;
        user.updateProfile({
          displayName: payload.name,
        }); 
        
        dispatch('register', payload);
      })
      .catch((error) => {
        throw error;
      });
  },
  
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
  
  async logOutWithOutReload({ commit }) {
    this.$firebaseAuth.signOut();
    this.$cookiz.removeAll();
    commit('SET_USER', null);
    commit('SET_PROFILE', null);
  },
  
  setUser({ commit }, payload) {
    if (payload !== null) {
      this.$cookiz.set('user', payload, { maxAge: 60 * 60 * 5, path: '/' });
    }

    console.log('user ' + JSON.stringify(payload));
    commit('SET_USER', payload);
  },

  async setProfile({ commit }, user) {
    let profile = null;

    if(user) {
      let usersRef = this.$firestore.collection('users');
      let query = usersRef.where('email', '==', user.email);
      let snapshot = await query.get();

      if(!snapshot || snapshot.empty || snapshot.size > 1)
        throw "Não foi possível recuperar o ID da máquina";
      
      let machineId;
      snapshot.forEach(doc => {
        machineId = doc.data().machine_id;
      });
  
      profile = { 
        avatar_path: user.photoURL, 
        machineId: machineId
      }
    }

    this.$cookiz.set('profile', profile);

    console.log('profile ' + JSON.stringify(profile));
    commit('SET_PROFILE', profile);
  },
};

export const state = () => ({
  user: null,
});
