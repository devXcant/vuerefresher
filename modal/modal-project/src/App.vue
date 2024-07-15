<template>
  <h1>{{ title }}</h1>
  <p>welcome</p>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Signup</a>
        <a href="#">More info</a>
      </template>
      <h1>ninja giveaway</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, fugit
        culpa? Veniam exercitationem alias, reprehenderit, maxime atque, debitis
        quae qui dolore aperiam magnam sit! Fuga nemo rem minus commodi
        dignissimos!
      </p>
    </Modal>
  </div>
  <div v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:steps>
        <a href="#">Step 1</a>
        <a href="#">Step 2</a>
      </template>
      <h1>boss level talk</h1>
      <p>how to null, cdioneroi sldkncoifr</p>
    </Modal>
  </div>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModal2">open modal2</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "First vue app",

      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
