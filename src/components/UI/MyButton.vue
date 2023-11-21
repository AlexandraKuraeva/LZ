<script setup>
defineOptions({ name: 'my-button' });
</script>

<template>
  <button class="btn"><slot></slot></button>
</template>

<style>
.btn {
  min-width: 232px;
  padding: 12px 20px;
  background-color: #9e896a;
  border-radius: 36px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;

  &:hover {
    background-color: #6c4b18;
  }
  &:focus {
    background-color: #553e19;
  }
}
</style>
