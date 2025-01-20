<template>
  <div class="add-office-page md:w-1/2 mx-auto">
    <!-- navigation -->
    <span class="navigation relative">
      <font-awesome-icon
        @click="navigateToHome"
        class="absolute"
        icon="arrow-left"
      />
      <span class="grid justify-center"
        >{{ props.id ? "Edit Office" : "New Office" }}
      </span>
    </span>

    <form class="p-2 text-sm" @submit.prevent="handleSubmit">
      <div class="form-group bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2"
          type="text"
          id="firstName"
          required
          v-model="name"
          placeholder="Office name"
        />
      </div>
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2"
          type="text"
          id="lastName"
          required
          v-model="address"
          placeholder="Physical Address"
        />
      </div>
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2"
          type="text"
          id="lastName"
          required
          v-model="email"
          placeholder="Email Address"
        />
      </div>
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2"
          type="text"
          id="lastName"
          required
          v-model="phoneNumber"
          placeholder="Phone Number"
        />
      </div>
      <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
        <input
          class="ml-2"
          type="text"
          id="lastName"
          required
          v-model="capacity"
          placeholder="Maximum Capacity"
        />
      </div>
    </form>

    <!-- color picker -->
    <div class="py-2 px-4 pt-0">
      <h2 class="text-xl font-bold mb-3">Office Color:</h2>
      <div class="color-circles">
        <div
          v-for="color in colors"
          :key="color.id"
          class="color-circle"
          :class="['color-circle', { selected: selectedColor === color.id }]"
          :style="{ backgroundColor: color.color }"
          @click="selectedColor = color.id"
        ></div>
      </div>
    </div>

    <!-- actions -->
    <div class="modal-actions mt-5">
      <FormButton
        :text="isEditMode ? 'UPDATE OFFICE' : 'ADD OFFICE'"
        :backgroundColor="'#489DDA'"
        @click="addOrEditOffice()"
      />
      <FormButton
        :text="isEditMode ? 'DELETE OFFICE' : 'CANCEL'"
        @click="isEditMode ? deleteOffice() : navigateToHome()"
        :fontColor="'#489DDA'"
        class="mt-2"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, computed, watchEffect } from "vue";
import FormButton from "../components/buttons/FormButton.vue";
import { colorsPickerColors } from "../assets/colors/colorsPickerColors.js";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";

const colors = ref(colorsPickerColors);
const router = useRouter();
const store = useStore();
const route = useRoute();
const isEditMode = route.query.mode === "edit";

const name = ref("");
const address = ref("");
const email = ref("");
const phoneNumber = ref("");
const capacity = ref("");
const selectedColor = ref("");
const staffMembersInOffice = ref([]);

const props = defineProps({
  id: {
    type: String,
    required: false,
  },
});

onMounted(async () => {
  if (isEditMode) {
    const officeId = props.id;
    try {
      const office = await store.dispatch("fetchOfficeById", officeId);
      name.value = office.name || "";
      address.value = office.address || "";
      email.value = office.email || "";
      phoneNumber.value = office.phoneNumber || "";
      capacity.value = office.capacity || "";
      selectedColor.value = office.selectedColor || "";
      staffMembersInOffice.value = office.staffMembersInOffice || [];
    } catch (error) {
      console.error("Error fetching office details:", error);
    }
  }
});

async function addOrEditOffice() {
  // Office data
  const officeData = {
    name: name.value,
    address: address.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
    capacity: capacity.value,
    selectedColor: selectedColor.value,
    staffMembersInOffice: staffMembersInOffice.value,
  };

  try {
    if (isEditMode && props.id) {
      // Editing existing office
      store.dispatch("editOffice", {
        officeId: props.id,
        office: officeData,
      });
    } else {
      // Creating a new office
      store.dispatch("addOffice", {
        office: officeData,
      });
    }

    await store.dispatch("fetchOffices");
  } catch (error) {
    console.error("Failed to submit form", error);
  }

  navigateToHome();

  // toast for successful creation
}

async function deleteOffice() {
  if (props.id) {
    try {
      await store.dispatch("deleteOffice", props.id);
      navigateToHome();
    } catch (error) {
      console.error("Error deleting office:", error);
    }
  }
}

const navigateToHome = () => {
  router.push("/");
};
</script>

<style lang="css" scoped>
.add-office-page {
  padding: 1rem;
}
.color-circles {
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
}

.color-circle {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}

.color-circle.selected {
  border: 1px solid black;
  scale: 1.1;
}
</style>
