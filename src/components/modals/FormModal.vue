<template>
  <div class="modal-content relative">
    <span class="close absolute right-0 top-0" @click="closeModal"
      >&times;</span
    >
    <h2 class="font-bold text-xl">Add New Staff Member</h2>

    <div v-if="nextSlide">
      <!-- form slide-->
      <form class="p-5" @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="firstName">Name</label>
          <input
            type="text"
            id="firstName"
            required
            v-model="firstName"
            placeholder="First name"
          />
        </div>
        <div class="form-group">
          <label for="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            required
            v-model="lastName"
            placeholder="Last name"
          />
        </div>
        <div class="form-group">
          <label for="imageId">Image Id</label>
          <input
            type="text"
            id="imageId"
            required
            v-model="imageId"
            placeholder="Last name"
          />
        </div>
      </form>
      <!-- next slide -->
      <div class="modal-actions mt-4">
        <Button :text="'Next'" @click="toggleNextSlide" />
      </div>
    </div>
    <!-- choose avatar slide-->
    <div v-else>
      <div>choose your avatar</div>
      <Button :text="'Add Staff Member'" @click="submitForm" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import Button from "../buttons/FormButton.vue";
import { useStore } from "vuex";

const emit = defineEmits(["close"]);
const nextSlide = ref(true);
const firstName = ref("");
const lastName = ref("");
const imageId = ref(1);
const store = useStore();
// const officeId = ref(1); //TODO: fix and make dynamic

const props = defineProps({
  office: {
    type: Object,
    required: true,
    default: () => ({}),
  },
});

function closeModal() {
  emit("close");
}

function toggleNextSlide() {
  nextSlide.value = !nextSlide.value;
}

async function submitForm() {
  const staffMember = {
    id: 5,
    firstName: firstName.value,
    lastName: lastName.value,
    imageId: imageId.value,
  };
  console.log(staffMember);

  // handle form submission
  try {
    store.commit("addStaffMember", {
      officeId: props.office.id,
      staffMember,
    });
    console.log("Form submitted", staffMember);
    emit("close");
    // TODO: toast of success message
  } catch (error) {
    console.error("Failed to add staff member", error);
    // TODO: toast of error message
  }

  console.log("Form submitted");
  emit("close");
}
</script>

<style lang="scss" scoped></style>
