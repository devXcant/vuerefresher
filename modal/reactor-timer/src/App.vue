<template>
<Form />
</template>

<script>
// import Block from "./components/Block.vue";
import Form from "./components/Form.vue"
export default {
  name: "App",
  components: {  Form },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
body{
  margin:0;
  background: #eee;
}
</style>
