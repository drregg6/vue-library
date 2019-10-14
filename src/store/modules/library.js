const state = {
  library: [
    {
      id: 128731,
      title: 'Book of Dust',
      author: 'Pullman',
      isRead: false,
      pages: 478
    },
    {
      id: 129891,
      title: 'The Subtle Knife',
      author: 'Pullman',
      isRead: false,
      pages: 389
    },
    {
      id: 123091,
      title: 'The Golden Compass',
      author: 'Pullman',
      isRead: true,
      pages: 312
    }
  ]
};

const getters = {
  getLibrary: (state) => {
    return state.library;
  }
};

const actions = {};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations
};