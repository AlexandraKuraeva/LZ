<script setup>
import { defineEmits } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  selectedItem: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['change-item']);

const clickOnItem = (itemName) => {
  console.log(itemName);
  emit('change-item', itemName);
};
</script>

<template lang="">
  <div class="form-top">
    <h4 class="form-top__title">Welcome to lorem..!</h4>
    <div class="form-top__toggle toggle">
      <div class="toggle__wrap">
        <span
          v-for="btn in items"
          :key="btn.name"
          :class="['toggle__item', { selected: btn.name === selectedItem }]"
          @click="clickOnItem(btn.name)"
          >{{ btn.label }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/mixins.scss';
.form-top {
  margin-bottom: 52px;
  @include breakpoint(w1200) {
    margin-bottom: 30px;
  }
  @include breakpoint(w768) {
    margin-bottom: 20px;
  }
  &__title {
    text-align: center;
    margin: 0 0 24px;
  }
}
.toggle {
  display: flex;
  justify-content: center;
  &__wrap {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: #f8eddd;
    border-radius: 33px;

    @include breakpoint(w500) {
      width: 100%;
    }
  }

  &__item {
    margin: 10px 12px;
    padding: 8px 0px;
    color: #9e896a;
    border-radius: 33px;
    width: 140px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
  }
  &__item.selected {
    background-color: #9e896a;
    color: #fff;
  }

  &__item:not(.selected) {
    &:hover {
      background-color: rgba(231, 212, 181, 0.429);
    }
  }
}
</style>
