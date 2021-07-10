<template>
  <h1>Jobs</h1>
   <div class="job-container" v-for="job in jobs" :key="job.id">
     <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>

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
h1 {
  text-transform: uppercase;
  font-size: 26px;
  color: crimson;
}

.job-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 400px;
  margin: auto;
}

.job-container a {
  text-decoration: none;
  color: #444;
  padding: 20px;
}
 
.job-container a :hover {
  background: #ddd;
  border-radius: 11px;
}
</style>


