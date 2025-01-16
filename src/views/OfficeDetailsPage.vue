<template>
  <div class="office-details-page">
    <span class="navigation relative">
      <font-awesome-icon
        @click="navigateToHome"
        class="absolute"
        icon="arrow-left"
      />
    </span>
    <span class="grid justify-center">Offices</span>

    <OfficeDetailsCard v-if="office" :office="office" />
    <StaffInOfficeList v-if="office" :office="office" />
    <ActionButton @click="isOpen = true" />
    <Modal v-if="isOpen">
      <FormModal @close="isOpen = false" :office="office" />
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
import Modal from "../components/modals/Modal.vue";
import FormModal from "../components/modals/FormModal.vue";

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
