<template>
  <h1>jobs</h1>
   <div v-for="job in jobs" :key="job.id">
      <h2>{{ job.title }}</h2>

   </div>


</template>

<script>


export default {

   
data() {
  return {
        jobs: [
      {
        title: 'Frontend Developer',
        id: 1,
        details: 'Developer who must be able to know React, VueJs, Javascript, Html, CSS, Sass'
      },
     {
        title: 'Backend Developer',
        id: 2,
        details: 'Developer who must be able to know Laravel, Php and Phyton'
      },
       {
        title: 'Fullstack Developer',
        id: 3,
        details: 'Developer who must be able to know all frameworks and languages of Html, Php, Css, javascript, java'
      },
    ]

  }


  }
}

</script>

<style scoped>

</style>


