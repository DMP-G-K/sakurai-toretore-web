<script setup lang="ts">
const props = defineProps({
  isOpen: Boolean,
});

const emit = defineEmits({
  close: null,
});

const emitClose = () => emit("close");
</script>

<template>
  <div v-if="isOpen" class="modal">
    <span class="overlay" @click="emitClose"></span>
    <div class="modal-content">
      <div class="modal-content-body">
        <slot></slot>
      </div>
      <span class="modal-content-close" @click="emitClose">&times;</span>
    </div>
  </div>
</template>

<style scoped>
/* モーダルの背景 */
.modal {
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  cursor: default;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.5);
  cursor: pointer;
}

/* モーダルコンテンツ */
.modal-content {
  position: relative;
  background-color: #fefefe;
  border-radius: 0.5rem;
  margin: auto;
  padding: 0.5rem;
  width: 80vw;
  height: 80vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.19);
}

.modal-content-body {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0.5rem;
}
.modal-content-body::-webkit-scrollbar {
  width: 0.4rem; /* スクロールバーの幅を設定 */
}

.modal-content-body::-webkit-scrollbar-track {
  background: #f1f1f1; /* スクロールバーの背景色を設定 */
  border-radius: 50vh;
}

.modal-content-body::-webkit-scrollbar-thumb {
  background: var(--gray-color); /* スクロールバーのハンドルの色を設定 */
  border-radius: 50vh;
}

.modal-content-body::-webkit-scrollbar-thumb:hover {
  background: var(
    --primary-color
  ); /* スクロールバーのハンドルをマウスオーバーしたときの色を設定 */
}

/* 閉じるボタン */
.modal-content-close {
  position: absolute;
  top: -4rem;
  right: -5rem;
  overflow: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: white;
  border-radius: 50vh;
  border: 2px solid var(--gray-color);
  color: var(--gray-color);
  font-size: 3rem;
}

.modal-content-close:hover,
.modal-content-close:focus {
  color: var(--primary-color);
  border-color: var(--primary-color);
  text-decoration: none;
  cursor: pointer;
}
</style>
