<template>
<h1>Movie Title</h1>
 <p>The Movie title is </p>
  
</template>

<script>
export default {
 props: ['id'],
      data() {
          return {
              id: this.$route.params.id,
         }
  }

}
</script>

<style>

</style>