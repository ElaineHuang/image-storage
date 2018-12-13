import api from '../../api/imgur';
import PATH from '../../constants/path';
import { router } from '../../main';

const state = {
  images: [],
  loading: false,
};

const getters = {
  allImages: state => state.images,
  isUploading: state => state.loading,
};

const actions = {
  async fetchImages({ rootState, commit }) {
    const { token } = rootState.auth;
    const response = await api.fetchImages(token);
    commit('setImages', response.data.data);
  },
  async uploadImages({ rootState, commit }, images) {
    const { token } = rootState.auth;
    commit('setLoading', true);
    await api.uploadImages(images, token);
    router.push(PATH.BASIC_URL)
    commit('setLoading');
  }
};

const mutations = {
  setImages: (state, images) => state.images = images,
  setLoading: (state, isLoading = false) => state.loading = isLoading,
};

export default {
  state,
  getters,
  actions,
  mutations,
};