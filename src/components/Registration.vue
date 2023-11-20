<template lang="">
  <div class="form-content">
    <p class="form-content__desc-reg">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    </p>
    <form action="/register " method="POST">
      <ul>
        <li class="text-field">
          <label for="name">Email Address</label>
          <my-input id="name" placeholder="Enter your Email Address" />
        </li>
        <li class="text-field">
          <label for="name">User name</label>
          <my-input id="name" placeholder="Enter your User name" />
        </li>
        <li class="text-field">
          <label for="pas">Password</label>
          <div class="text-field__icon">
            <svg width="18" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m8.863 5.15 2.577 2.577.012-.135c0-1.354-1.1-2.454-2.454-2.454l-.135.012Z"
                fill="#000"
              />
              <path
                d="M8.998 3.501a4.091 4.091 0 0 1 4.09 4.09c0 .528-.106 1.03-.29 1.493l2.392 2.393A9.714 9.714 0 0 0 18 7.59C16.58 4 13.092 1.456 8.998 1.456a9.567 9.567 0 0 0-3.26.573L7.505 3.79a4.11 4.11 0 0 1 1.493-.29ZM.818 1.272l1.865 1.865.372.373A9.689 9.689 0 0 0 0 7.59c1.415 3.591 4.908 6.135 8.998 6.135a9.591 9.591 0 0 0 3.587-.69l.348.347 2.384 2.388 1.043-1.038L1.86.229.819 1.272Zm4.524 4.52 1.263 1.264a2.592 2.592 0 0 0-.061.535c0 1.354 1.1 2.454 2.454 2.454.184 0 .36-.024.532-.06l1.264 1.263c-.545.27-1.15.433-1.796.433a4.091 4.091 0 0 1-4.09-4.09c0-.646.164-1.251.434-1.8Z"
                fill="#000"
              />
            </svg>
            <my-input id="pas" type="password" placeholder="Enter your Password" />
          </div>
        </li>
      </ul>

      <div class="content-right"><my-button class="form-content__btn">Register</my-button></div>
    </form>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss"></style>
