<script setup>
import { ref } from 'vue';
import Authorization from '@/components/Authorization.vue';
import Registration from '@/components/Registration.vue';
import TopForm from '@/components/TopForm.vue';
import LeftBlock from '@/components/LeftBlock.vue';

const tabItems = [
  { name: 'authorization', label: 'Login' },
  { name: 'registration', label: 'Register' },
];
const selectedItem = ref('authorization');

const changeItem = (itemName) => {
  selectedItem.value = itemName;
};
</script>

<template>
  <section class="section-def">
    <div class="container">
      <div class="row">
        <div class="left-block">
          <LeftBlock />
        </div>
        <div class="right-block">
          <div class="form">
            <TopForm :items="tabItems" :selectedItem="selectedItem" @change-item="changeItem" />
            <transition name="fade" mode="out-in">
              <component
                :is="selectedItem === 'authorization' ? Authorization : Registration"
                key="componentKey"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import '@/assets/styles/mixins.scss';
.section-def {
  padding: 40px 0;
  @include breakpoint(w768) {
    padding: 130px 0;
  }
}
.container {
  padding: 0 40px;
  max-width: 1540px;
  margin: 0 auto;
  @include breakpoint(w1600) {
    max-width: 1430px;
  }

  @include breakpoint(w1200) {
    padding: 0 30px;
  }

  @include breakpoint(w500) {
    padding: 0 25px;
  }
}

.row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint(w1000) {
    flex-direction: column;
  }
}
.left-block {
  position: relative;
  width: 54%;
  @include breakpoint(w1000) {
    width: 70%;
    margin-bottom: 60px;
  }
  @include breakpoint(w500) {
    display: none;
  }
}
.right-block {
  width: 46%;
  padding: 0px 60px;
  @include breakpoint(w1200) {
    padding: 0;
  }
  @include breakpoint(w1000) {
    width: 100%;
  }
}
.form {
  padding-left: 50px;
  @include breakpoint(w1000) {
    padding: 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.9); /* Уменьшение масштаба при входе и выходе */
}
</style>
