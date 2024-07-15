<template>
  <!-- 1 -->
  <!-- <div class="home">Home</div>
  <p ref="p">name is {{ name }} and age is {{ age }}</p>
  <button @click="handleClick">click</button>
  <button @click="age++">add 1</button>
  <input type="text" v-model="name"> -->
  

  <!-- 2 -->
  <!-- <div>
    <h1>Home</h1>
    <h2>refs</h2>
    <p>{{ ayorOne.name }} + {{ ayorOne.age }}</p>
    <button @click="updateAyorOne">update Ayor One</button>

    <h2>Reactive</h2>
    <p>{{ ayorTwo.name }} - {{ ayorTwo.age }}</p>
    <button @click="updateAyorTwo">update Ayor two</button>
  </div> -->

  <!-- 3 -->
  <!-- <div>
    <input type="text" v-model="search" />
    <p>Search term: {{ search }}</p>
    <div v-for="name in matchingNames" :key="name">{{ name }}</div>
  </div> -->

  <!-- 4 -->

  <div>
    <h1>home</h1>
    <PostList v-if="showPosts" :posts="posts" />
    <button @click="showPosts = !showPosts">toggle posts</button>
  </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from "vue";
import PostList from "../components/PostList.vue";

export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    // 1
    // console.log("setup");

    // const name = ref("mario");
    // const age = ref(30);

    // const p = ref(null)

    // const handleClick=()=>{
    //   name.value = 'luigi'
    //   age.value = 35
    // }

    // return{name, age, p, handleClick}

    // 2
    // const ayorOne = ref({ name: "mario", age: 30 });
    // const ayorTwo = reactive({name: 'devdev',age: 50})

    // const updateAyorOne = () => {
    //   ayorOne.value.age = 40;
    // };
    // const updateAyorTwo = () => {
    //   ayorTwo.age = 40;
    // };

    // return {  ayorOne, updateAyorOne, ayorTwo, updateAyorTwo };

    // 3
    // const search = ref("");
    // const names = ref([
    //   "mario",
    //   "yoshi",
    //   "shaun",
    //   "ayor",
    //   "bami",
    //   "peach",
    //   "princess",
    // ]);

    // watch(search, ()=> {
    //   console.log('watchinng...')
    // })

    // watchEffect(()=> {
    //   console.log('watch effect ran')
    // })

    // const matchingNames = computed(()=> {
    //   return names.value.filter((name)=> name.includes(search.value))
    // })
    // return { names, search, matchingNames };

    // 4
    const posts = ref([
      { title: "welcome to the blog", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sed blanditiis sapiente a quibusdam perferendis eius cumque qui facere optio. Eveniet saepe quisquam eligendi quod atque veniam nihil! Adipisci labore quia ipsam repudiandae! Nihil reiciendis, aliquid dolor commodi eveniet rerum dolorum numquam atque architecto in nisi laboriosam culpa eum ducimus.", id: 1 },
      { title: "top 5 css tips", body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate, sed blanditiis sapiente a quibusdam perferendis eius cumque qui facere optio. Eveniet saepe quisquam eligendi quod atque veniam nihil! Adipisci labore quia ipsam repudiandae! Nihil reiciendis, aliquid dolor commodi eveniet rerum dolorum numquam atque architecto in nisi laboriosam culpa eum ducimus.", id: 2 },
    ]);

    const showPosts = ref(true)
    return { posts, showPosts  };
  },
};
</script>
