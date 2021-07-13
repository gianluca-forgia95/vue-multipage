<template>
  <h1>Movies</h1>
    


   
    <div class="search">
        <input class="input-search" type="text" placeholder="search movie or tv-series..."  v-model="search">
        <button class="btn" type="button" name="button" @click="searchFilm">Search</button>
   </div>

    <h2 class="title-section" v-if="movies.length > 0">Movies</h2>
      <div class="container">
        <!-- Movie Card -->
        <div class="card" v-for="movie in movies" :key='movie.id' >
          <div class="card-inner">
            <!-- Img Cover -->
            <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
               <img :src="'https://image.tmdb.org/t/p/w300' + movie.poster_path" alt="Movie img" class="cover">
            </router-link>
           
            <!-- /Img Cover -->
            <!-- Info Movie -->
           <div class="info">
             <h3 class="title">Titolo: {{ movie.title }}</h3>
             <h4>Titolo Originale: {{ movie.original_title }}</h4>
            <!-- Movie Original Language -->
            <div class="language">
              <span>Lingua Originale
                <img :src="'flags/' + movie.original_language + '.png'">
              </span>
             </div>
            <!-- /Movie Original Language -->
            <!-- Movie Rating -->
           <!-- /Movie Rating -->
           <!-- Realease Date -->
           <div class="release-date">
             <span>Release: {{ movie.release_date }}</span>
           </div>
           <!-- /Realease Date -->
           <!-- Overview -->
           <h4 class="title-prev" v-if="movie.overview.length > 0">Overview</h4>
           <div class="overview" >
            <p>{{ movie.overview }}</p>
           </div>
           <!-- /Overview -->
          </div>
       <!-- /Info Movie -->
         </div>
       </div>
      <!-- /Movie Card -->
      </div>


</template>

<script>


export default {

   
data() {
  return {
      movies: [],
      search: "",
      apiKey: 'febf9a4fc7b46ba8b5e4681cf81209ce',
      urlSearch: 'https://api.themoviedb.org/3/search/',
        

  }


  },
    methods: {
    searchFilm() {
         axios.get( this.urlSearch + 'movie' , {
         params: {
           api_key: this.apiKey,
           query: this.search,
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.movies = response.data.results;
         console.log(this.movies);
         this.search = "";
         for ( var i = 0; i < this.movies.length; i++ ) {
           // Voto 1/5
            this.movies[i].vote_average = Math.ceil(this.movies[i].vote_average / 2);
           
         }

       });

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


