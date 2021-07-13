<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'Series'}">Tv Series</router-link> |
    <router-link :to="{ name: 'Movies'}">Movies</router-link>
  </div>
<!-- Buttons back forward e home -->
  <button @click= "redirect"><i class="fas fa-laptop-house"></i></button>
  <button @click= "back"><i class="fas fa-caret-square-left"></i></button>
  <button @click= "forward"><i class="fas fa-caret-square-right"></i></button>
<!-- /Buttons back forward e home -->
  <router-view/>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    padding: 10px;
    text-decoration: none;
    border-radius: 4px;

    &.router-link-exact-active {
      color: #fff;
      background: #42b983;
    }
  }
}
</style>

<script>


export default {
  data() {
  
  },
  methods: {
    redirect(){
      this.$router.push({ name: "Home"});
    },
    back(){
      this.$router.go(- 1);
    },
    forward(){
       this.$router.go(+ 1);
    }
  }


}

</script>

