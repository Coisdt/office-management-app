<template>
  <div class="home-page">
    <h1 class="text-2xl font-bold mb-4">All Offices</h1>
    <OfficeDetailsList :offices="offices" />
    <ActionButton @click="isOpen = true" />
    <Modal v-if="isOpen">
      <!-- <FormModal @close="isOpen = false" /> -->
    </Modal>
  </div>
</template>

<script setup>
import { onMounted, computed, ref } from "vue";
import { useStore } from "vuex";
import OfficeDetailsList from "../components/OfficeDetailsList.vue";
import ActionButton from "../components/buttons/ActionButton.vue";
import Modal from "../components/modals/Modal.vue";
import FormModal from "../components/modals/FormModal.vue";

const store = useStore();
const isOpen = ref(false);

// Map state and actions
const offices = computed(() => store.state.offices);
const fetchOffices = store.dispatch;

onMounted(() => {
  fetchOffices("fetchOffices");
});
</script>

<style scoped>
.home-page {
  padding: 1rem;
}
</style>
