<template>
    <input class="input" type="text" required>
</template>
<script>
export default {
  name: 'my-input',
};
</script>
<style scoped>
.input {
  width: 100%;
  border-radius: 40px;
  padding: 15px 30px;
  font-size: 16px;
  border: 1px solid #9E896A;
  &::placeholder {
    color: #ACACAC;
    font-family: 'Poppins' sans-serif;
	 font-weight: 300;
    font-size: 15px;
  }
  &:focus{
	 border: 1px solid #70614c;
  }
}
</style>
