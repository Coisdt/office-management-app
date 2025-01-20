<template>
  <div class="office-details-page">
    <!-- navigation -->
    <span class="navigation grid grid-cols-[auto,1fr,auto] items-center mb-4">
      <font-awesome-icon @click="navigateToHome" class="" icon="arrow-left" />
      <span class="grid justify-center">Office</span>
      <ActionButton @click="isOpen = true" :text="'Add Staff Member'" />
    </span>

    <OfficeDetailsCard v-if="office" :office="office" class="mt-4" />
    <StaffInOfficeList v-if="office" :office="office" />

    <Modal v-if="isOpen" @close="isOpen = false">
      <FormModal :staffMember="null" :office="office" @close="isOpen = false" />
    </Modal>
  </div>
</template>

<script setup>
import { ref, onMounted, computed, watchEffect } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import OfficeDetailsCard from "../components/OfficeDetailsCard.vue";
import StaffInOfficeList from "../components/StaffInOfficeList.vue";
import ActionButton from "../components/buttons/ActionButton.vue";
import Modal from "../components/modals/BaseModal.vue";
import FormModal from "../components/modals/AddOrEditStaffModal.vue";

const isOpen = ref(false);
const router = useRouter();
const route = useRoute();
const store = useStore();

const office = ref(null);

// Navigate to the home page
const navigateToHome = () => {
  router.push("/");
};

// Map state and actions
const offices = computed(() => store.state.offices);
const fetchOffices = store.dispatch.bind(store, "fetchOffices");

onMounted(() => {
  fetchOffices();
});

// Watch for route changes and update the office data
watchEffect(() => {
  const officeId = parseInt(route.params.id);
  office.value = offices.value.find((office) => office.id === officeId);
});
</script>

<style lang="css" scoped>
.office-details-page {
  padding: 1rem;
}
</style>
