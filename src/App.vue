<template>
  <div id="nav">
    <div class="router-container">
        <router-link to="/">Home</router-link> |
        <router-link :to="{ name: 'Series'}">Tv Series</router-link> |
        <router-link :to="{ name: 'Movies'}">Movies</router-link>
    </div>
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
  display: flex;
  justify-content: center;

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
}.search-container{
  width: 490px;
  display: block;
  margin: 0 auto;
}

input#search-bar{
  margin: 0 auto;
  width: 100%;
  height: 45px;
  padding: 0 20px;
  font-size: 1rem;
  border: 1px solid #D0CFCE;
  outline: none;
  &:focus{
    border: 1px solid #008ABF;
    transition: 0.35s ease;
    color: #008ABF;
    &::-webkit-input-placeholder{
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &::-moz-placeholder {
      transition: opacity 0.45s ease; 
  	  opacity: 0;
     }
    &:-ms-placeholder {
     transition: opacity 0.45s ease; 
  	 opacity: 0;
     }    
   }
 }

.search-icon{
  position: relative;
  float: right;
  width: 75px;
  height: 75px;
  top: -62px;
  right: -45px;
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

