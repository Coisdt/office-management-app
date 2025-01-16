<template>
  <div class="modal-content relative">
    <!-- navigation -->
    <span
      class="close absolute right-1 top-0 border border-black rounded-full shadow-lg size-6"
      @click="closeModal"
      ><font-awesome-icon
        class="absolute top-[5px] right-[5px] size-3"
        @click="staffMemberOptions"
        :icon="['fas', 'times']"
    /></span>
    <h2 class="font-bold text-xl">New Staff Member</h2>

    <!-- form pages -->
    <Swiper
      ref="swiperRef"
      :modules="[Pagination]"
      :pagination="{ clickable: true }"
    >
      <SwiperSlide>
        <form class="p-3" @submit.prevent="handleSubmit">
          <div
            class="form-group my-2 bg-white rounded-md h-10 grid items-center"
          >
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
          <div
            class="form-group my-2 bg-white rounded-md h-10 grid items-center"
          >
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
      </SwiperSlide>
      <SwiperSlide>
        <span class="navigation relative">
          <font-awesome-icon
            @click="goToPreviousSlide"
            class="absolute"
            icon="arrow-left"
          />
        </span>
        <div>choose your avatar</div>
        <Button :text="'Add Staff Member'" @click="submitForm" />
      </SwiperSlide>
    </Swiper>

    <!-- next slide -->
    <div class="modal-actions mt-4">
      <Button
        :text="activeSlide.value > 0 ? 'Next' : 'Submit'"
        @click="goToNextSlide"
      />
    </div>
  </div>
</template>

<script setup>
import { defineEmits, ref } from "vue";
import Button from "../buttons/FormButton.vue";
import { useStore } from "vuex";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination } from "swiper/modules"; // Correct path for Swiper v7+
import "swiper/css";
import "swiper/css/pagination"; // Import Swiper's pagination styles

const activeSlide = ref(0);

const handleSlideChange = () => {
  const swiperInstance = swiperRef.value.swiper;
  activeSlide.value = swiperInstance.activeIndex;
};

// Event handlers
const onSwiper = (swiper) => {
  console.log(swiper);
};

const onSlideChange = () => {
  console.log("slide change");
};

const emit = defineEmits(["close"]);
const firstName = ref("");
const lastName = ref("");
const imageId = ref(1); //TODO: fix and make dynamic with avatar picker
const store = useStore();
const swiperRef = ref(null);

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

const goToNextSlide = () => {
  if (swiperRef.value && swiperRef.value.swiper) {
    console.log("go to next slide", swiperRef.value.swiper);

    swiperRef.value.swiper.slideNext();
  }
};

function goToPreviousSlide() {
  if (swiperRef.value) {
    swiperRef.value.swiper.slidePrev();
  }
}

async function submitForm() {
  const staffMember = {
    firstName: firstName.value,
    lastName: lastName.value,
    imageId: imageId.value,
  };

  try {
    await store.dispatch("addStaffMember", {
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
}
</script>

<style lang="scss" scoped></style>
