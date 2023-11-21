<template lang="">
  <div class="form-content">
    <p class="form-content__desc-reg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <form action="/register " method="POST">
      <ul>
        <li class="text-field">
          <label for="name">Email Address</label>
          <my-input id="email" type="email" placeholder="Enter your Email Address" />
        </li>
        <li class="text-field">
          <label for="name">User name</label>
          <my-input id="name" placeholder="Enter your User name" />
        </li>
        <li class="text-field">
          <div class="text-field__pass"><my-pass-input /></div>
        </li>
      </ul>
      <div class="content-right">
        <my-button type="submit" class="form-content__btn">Register</my-button>
      </div>
    </form>
  </div>
</template>
<script setup></script>
<style lang="scss"></style>
