<template>
  <div class="modal-content relative">
    <div v-if="nextSlide">
      <!-- navigation -->
      <span
        class="close absolute right-1 top-0 border border-black rounded-full shadow-lg size-6"
        @click="closeModal"
        ><font-awesome-icon
          class="absolute top-[5px] right-[5px] size-3 cursor-pointer"
          :icon="['fas', 'times']"
      /></span>
      <h2 class="font-bold text-xl">New Staff Member</h2>

      <!-- form slide-->
      <form class="p-3" @submit.prevent="handleSubmit">
        <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
          <!-- <label for="firstName">Name</label> -->
          <input
            class="ml-2"
            type="text"
            id="firstName"
            required
            v-model="firstName"
            placeholder="First name"
          />
        </div>
        <div class="form-group my-2 bg-white rounded-md h-10 grid items-center">
          <!-- <label for="lastName">Last Name</label> -->
          <input
            class="ml-2"
            type="text"
            id="lastName"
            required
            v-model="lastName"
            placeholder="Last name"
          />
        </div>
      </form>
      <div class="carousel-dots">
        <span class="dot active"></span>
        <span class="dot"></span>
      </div>

      <!-- next slide -->
      <div class="modal-actions mt-4">
        <Button :text="'NEXT'" @click="toggleNextSlide" />
      </div>
    </div>
    <!-- choose avatar slide-->
    <div v-else>
      <!-- navigation -->
      <span class="navigation grid grid-cols-[auto_1fr] items-center gap-2">
        <font-awesome-icon
          class="cursor-pointer"
          @click="navigateBack"
          icon="arrow-left"
        />
        <h2 class="font-bold text-xl">New Staff Member</h2>
      </span>
      <span
        class="close absolute right-1 top-0 border border-black rounded-full shadow-lg size-6"
        @click="closeModal"
        ><font-awesome-icon
          class="absolute top-[5px] right-[5px] size-3"
          :icon="['fas', 'times']"
      /></span>

      <!-- avatar picker -->
      <div class="avatars-container p-4">
        <div
          v-for="avatar in avatars"
          :key="avatar.id"
          :class="['avatar', { selected: imageId === avatar.id - 1 }]"
        >
          <img
            :src="avatar.src"
            :alt="'Avatar ' + avatar.id"
            @click="imageId = avatar.id - 1"
          />
        </div>
      </div>
      <div class="carousel-dots mb-4">
        <span class="dot"></span>
        <span class="dot active"></span>
      </div>
      <Button :text="'ADD STAFF MEMBER'" @click="submitForm" />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import Button from "../buttons/FormButton.vue";
import { useStore } from "vuex";
import avatars from "../../assets/avatars/avatars.js";

const emit = defineEmits(["close"]);
const nextSlide = ref(true);
const firstName = ref("");
const lastName = ref("");
const imageId = ref("");
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

function navigateBack() {
  nextSlide.value = !nextSlide.value;
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

<style lang="css" scoped>
.avatars-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}
.avatar img {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  /* border: 1px solid red; */
}

.avatar img:hover,
.avatar img:active {
  border: 1px solid #489dda !important;
  scale: 1.1 !important;
}
.avatar.selected img {
  border: 1px solid #489dda;
  scale: 1.1;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #ccc;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #489dda;
}
</style>
