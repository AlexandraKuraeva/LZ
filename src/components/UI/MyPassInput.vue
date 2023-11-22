<script setup>
import { ref } from 'vue';
defineOptions({ name: 'my-pass-input' });

const showPassword = ref(false);

function showHidePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<template>
  <label for="pas">Password</label>
  <div class="text-field__icon">
    <span @click="showHidePassword" class="eye-icon">
      <svg
        width="18"
        height="16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        v-show="!showPassword"
      >
        <path
          d="m8.863 5.15 2.577 2.577.012-.135c0-1.354-1.1-2.454-2.454-2.454l-.135.012Z"
          fill="#000"
        />
        <path
          d="M8.998 3.501a4.091 4.091 0 0 1 4.09 4.09c0 .528-.106 1.03-.29 1.493l2.392 2.393A9.714 9.714 0 0 0 18 7.59C16.58 4 13.092 1.456 8.998 1.456a9.567 9.567 0 0 0-3.26.573L7.505 3.79a4.11 4.11 0 0 1 1.493-.29ZM.818 1.272l1.865 1.865.372.373A9.689 9.689 0 0 0 0 7.59c1.415 3.591 4.908 6.135 8.998 6.135a9.591 9.591 0 0 0 3.587-.69l.348.347 2.384 2.388 1.043-1.038L1.86.229.819 1.272Zm4.524 4.52 1.263 1.264a2.592 2.592 0 0 0-.061.535c0 1.354 1.1 2.454 2.454 2.454.184 0 .36-.024.532-.06l1.264 1.263c-.545.27-1.15.433-1.796.433a4.091 4.091 0 0 1-4.09-4.09c0-.646.164-1.251.434-1.8Z"
          fill="#000"
        />
      </svg>
      <svg
        fill="#000"
        width="18"
        height="16"
        viewBox="0 -32 576 576"
        xmlns="http://www.w3.org/2000/svg"
        v-show="showPassword"
      >
        <path
          d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
        />
      </svg>
    </span>
    <my-input
      id="pas"
      :type="[showPassword ? 'text' : 'password']"
      placeholder="Enter your Password"
      
    />
  </div>
</template>

<style scoped>
.eye-icon {
  cursor: pointer;
}
</style>
