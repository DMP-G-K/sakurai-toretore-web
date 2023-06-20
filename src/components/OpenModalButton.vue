<script setup lang="ts">
import { ref } from "vue";
import Modal from "./Modal.vue";
const props = defineProps({
  text: String,
});
const isModalOpen = ref(false);

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="wrap">
    <button class="button" @click="openModal">
      <span class="button-text">{{ text }}</span>
      <img class="button-icon" src="svgs/right-arrow.svg" alt="" />
    </button>
    <Modal :isOpen="isModalOpen" @close="closeModal"> <slot></slot> </Modal>
  </div>
</template>

<style scoped lang="scss">
* {
  background-color: transparent;
  border: none;
  outline: none;
  padding: 0;
  appearance: none;
}

.button {
  width: 100%;
  height: 52px;
  border: 1px solid #464646;
  padding: 15px;
  border-radius: 9px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &-text {
    font-size: 16px;
    letter-spacing: 1.2px;
    color: #5f8934;
    font-weight: bold;
  }
  &-icon {
    width: 20px;
    height: 20px;
    margin-left: 10px;
  }
}
</style>
