<template lang="">
  <div class="form-content">
    <p class="form-content__desc-log">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <form action="/login" method="POST">
      <ul>
        <li class="text-field">
          <label for="name">User name</label>
          <my-input id="name" placeholder="Enter your User name" />
        </li>
        <li class="text-field">
          <my-pass-input />
        </li>
      </ul>
      <a href="#" class="forgot-password">Forgot Password ?</a>
      <div class="content-right">
        <my-button type="submit" class="form-content__btn">Login</my-button>
      </div>
    </form>
  </div>
</template>
<script setup></script>
<style lang="scss">
.form-content {
  &__desc-reg {
    margin-bottom: 32px;
    color: #5b5b5b;
  }
  &__desc-log {
    margin-bottom: 42px;
  }

  &__btn {
    margin-top: 55px;
  }
}
.text-field {
  & label {
    display: inline-block;
    margin-bottom: 12px;
  }
  &__icon {
    position: relative;
    & svg {
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
    }
  }
}

.text-field:not(:last-child) {
  margin-bottom: 30px;
}
.forgot-password {
  display: block;
  font-weight: 300;
  font-size: 12px;
  text-align: right;
  margin: 22px 0 7px;
  color: #000;
}

.content-right {
  text-align: right;
}
</style>
