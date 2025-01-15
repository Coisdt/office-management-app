import { createStore } from "vuex";
import axios from "axios";
import { offices } from "./mockAPI";

const store = createStore({
  state: {
    offices: [],
    loading: false,
    error: null, // New error state
  },
  mutations: {
    setOffices(state, offices) {
      state.offices = offices;
    },
    setLoading(state, isLoading) {
      state.loading = isLoading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  actions: {
    async fetchOffices({ commit }) {
      commit("setLoading", true);
      commit("setError", null); // Reset error
      try {
        const response = await axios.get("/api/offices");
        console.log("Data fetched:", response.data);

        commit("setOffices", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        commit("setError", error.message || "Failed to fetch offices");
      } finally {
        commit("setLoading", false);
      }
    },
  },
  getters: {
    officeCount: (state) => state.offices.length,
    getOfficeById: (state) => (id) =>
      state.offices.find((office) => office.id === id),
  },
});

export default store;
