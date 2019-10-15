const state = {
  library: [
    {
      id: 1,
      title: "Example Book",
      author: "Dave Regg",
      isRead: false,
      pages: "0"
    }
  ]
};

const getters = {
  getLibrary: state => {
    return state.library;
  }
};

const actions = {
  addBook: ({ commit }, newBook) => {
    commit("commitBook", newBook);
  },

  deleteBook: ({ commit }, id) => {
    commit("commitDelete", id);
  },

  updateBook: ({ commit }, updatedBookId) => {
    commit("commitUpdate", updatedBookId);
  }
};

const mutations = {
  commitBook: (state, newBook) => state.library.push(newBook),
  commitDelete: (state, id) => {
    if (id === 1) {
      return;
    }
    state.library = state.library.filter(book => book.id !== id);
  },
  commitUpdate: (state, updatedBook) => {
    // Get book index
    const index = state.library.findIndex(book => book.id === updatedBook.id);

    if (index !== -1) {
      state.library.splice(index, 1, updatedBook);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
