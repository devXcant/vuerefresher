const app = Vue.createApp({
  data() {
    return {
      url: "http://www.google.com",
      title: "the final empire",
      author: "JK rowlands",
      age: 30,
      showBooks: true,
      books: [
        { title: "fool", author: "ronaldo c", isFav: true },
        { title: "football", author: "kaka", isFav: false },
        { title: "volleyball", author: "messi", isFav: true },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleIsFav(book){
        book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
        return this.books.filter((book)=> book.isFav)
    }
  }
});

app.mount("#app");
