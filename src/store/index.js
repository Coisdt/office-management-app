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
    ADD_OFFICE(state, office) {
      state.offices.push(office);
    },
    EDIT_OFFICE(state, updatedOffice) {
      const index = state.offices.findIndex(
        (office) => office.id === updatedOffice.id
      );
      if (index !== -1) {
        state.offices.splice(index, 1, updatedOffice);
      }
    },
    SET_OFFICE(state, office) {
      const index = state.offices.findIndex((o) => o.id === office.id);
      if (index !== -1) {
        state.offices.splice(index, 1, office);
      } else {
        state.offices.push(office);
      }
    },
    DELETE_OFFICE(state, officeId) {
      state.offices = state.offices.filter((office) => office.id !== officeId);
    },
    DELETE_STAFF_MEMBER(state, { officeId, staffMemberId }) {
      const office = state.offices.find((office) => office.id === officeId);
      if (office) {
        office.staffMembersInOffice = office.staffMembersInOffice.filter(
          (staffMember) => staffMember.id !== staffMemberId
        );
      }
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
        // Simulate delay
        const response = await new Promise((resolve) => {
          setTimeout(async () => {
            const res = await axios.get("/api/offices");
            resolve(res);
          }, 500); // Delay for 3 seconds
        });

        commit("setOffices", response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        commit("setError", error.message || "Failed to fetch offices");
      } finally {
        commit("setLoading", false);
      }
    },
    async addOffice({ commit }, { office }) {
      try {
        await axios.post("/api/offices", office);
        commit("ADD_OFFICE", office);
      } catch (error) {
        console.error("Failed to add office", error);
      }
    },
    async deleteStaffMember({ commit }, { officeId, staffMemberId }) {
      try {
        await axios.delete(`/api/offices/${officeId}/staff/${staffMemberId}`);
        commit("DELETE_STAFF_MEMBER", { officeId, staffMemberId });
      } catch (error) {
        console.error("Error deleting staff member:", error);
        throw error;
      }
    },
    async fetchOfficeById({ commit }, officeId) {
      try {
        const response = await axios.get(`/api/offices/${officeId}`);
        commit("SET_OFFICE", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching office:", error);
        throw error;
      }
    },
    async editOffice({ commit }, { officeId, office }) {
      try {
        const response = await axios.put(`/api/offices/${officeId}`, office);
        commit("EDIT_OFFICE", response.data);
      } catch (error) {
        console.error("Error editing office:", error);
        throw error;
      }
    },
    async deleteOffice({ commit }, officeId) {
      try {
        await axios.delete(`/api/offices/${officeId}`);
        commit("DELETE_OFFICE", officeId);
      } catch (error) {
        console.error("Error deleting office:", error);
        throw error;
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
