import Cookies from 'js-cookie'
import { removeToken, setAuth } from '@/utils/auth'
import { initialise } from '@/api/app'

const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get('sidebarStatus'),
      withoutAnimation: false
    },
    device: 'desktop',
    isInitialise: false
  },
  mutations: {
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set('sidebarStatus', 1)
      } else {
        Cookies.set('sidebarStatus', 0)
      }
      state.sidebar.opened = !state.sidebar.opened
      state.sidebar.withoutAnimation = false
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set('sidebarStatus', 1)
      state.sidebar.opened = false
      state.sidebar.withoutAnimation = withoutAnimation
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device
    },
    SET_INITIALISE: (state, val) => {
      state.isInitialise = val
    },
  },
  actions: {
    toggleSideBar({ commit }) {
      commit('TOGGLE_SIDEBAR')
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    toggleDevice({ commit }, device) {
      commit('TOGGLE_DEVICE', device)
    },
    initialiseAction({ commit, dispatch }) {
      commit('SET_INITIALISE', false);

      initialise().then(({ data }) => {
        commit('SET_INITIALISE', true);
        // commit('setUser', data.user);
        console.log('Autorizado');
      }).catch((error) => {
        console.log('catch en acción initialise STORE', error);
        // if (error.response.status === 401) {
          removeToken()
          setAuth(false)
          this.$router.push({ path: '/login' });
        // }
      });
    },
  }
}

export default app
