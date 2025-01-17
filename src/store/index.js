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
    addStaffMember(state, { officeId, staffMember }) {
      const office = state.offices.find((office) => office.id === officeId);
      if (office) {
        office.staffMembersInOffice.push(staffMember);
      }
    },
    updateStaffMember(state, updatedStaffMember) {
      const office = state.offices.find((office) =>
        office.staffMembersInOffice.some(
          (member) => member.id === updatedStaffMember.id
        )
      );
      if (office) {
        const staffMemberIndex = office.staffMembersInOffice.findIndex(
          (member) => member.id === updatedStaffMember.id
        );
        if (staffMemberIndex !== -1) {
          office.staffMembersInOffice[staffMemberIndex] = updatedStaffMember;
        }
      }
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
    async addStaffMember({ commit }, { officeId, staffMember }) {
      commit("setLoading", true);
      commit("setError", null);
      try {
        await axios.post(`/api/offices/${officeId}/staff`, staffMember);
        log("Staff member added:", staffMember);
        commit("addStaffMember", { officeId, staffMember });
      } catch (error) {
        commit("setError", error.message || "Failed to add staff member");
      } finally {
        commit("setLoading", false);
      }
    },
    async editStaffMember(
      { commit },
      { officeId, staffMemberId, staffMember }
    ) {
      const response = await axios.put(
        `/api/offices/${officeId}/staff/${staffMemberId}`,
        staffMember
      );
      commit("updateStaffMember", response.data);
    },
  },
  getters: {
    officeCount: (state) => state.offices.length,
    getOfficeById: (state) => (id) =>
      state.offices.find((office) => office.id === id),
  },
});

export default store;
