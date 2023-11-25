<script setup>

</script>
<template>
  <div class="left-block__inner">
    <div class="image-block">
      <picture>
        <source media="(min-width: 1080px)" srcset="../assets/image/cat.jpg" />
        <source media="(min-width: 576px)" srcset="../assets/image/cat-m.jpg" />
        <img src="../assets/image/cat.jpg" loading="lazy" width="737" height="820" alt=""
      /></picture>
    </div>
    <div class="left-block__content">
      <h3 class="left-block__title">Lorem Ipsum is simply</h3>
      <p class="left-block__subtitle">Lorem Ipsum is simply</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '@/assets/styles/mixins.scss';
.left-block {
  &__title {
    font-weight: 700;

    @include adaptiv-font(37, 24);
    margin-bottom: 5px;
  }

  &__content {
    position: absolute;
    bottom: 0;
    left: 0;
    color: #fff;
    margin: 0 0 48px 69px;
	 @include breakpoint(w1000) {
    margin: 0 0 25px 50px;
  }
  }

  &__subtitle{
	font-size: 25px;
  }
}
.image-block {
  position: relative;
  border-radius: 29px;

  & img {
    width: 100%;
    height: auto;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 29px;
    background: linear-gradient(180deg, rgba(151, 118, 68, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%);
  }
  @include breakpoint(w1000) {
    flex-direction: column;
  }
}
</style>
