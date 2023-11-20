<template>
  <button type="submit" class="btn"><slot></slot></button>
</template>

<script>
export default {
	name: "my-button"
};
</script>

<style>
.btn {
  min-width: 232px;
  padding: 12px 20px;
  background-color: #9E896A;
  border-radius: 36px;
  color: #fff;
  font-size: 16px;
  transition: all .3s;

  &:hover{
	background-color: #553E19;
  }
}
</style>
