<template>
  <div class="about">
    <h1>Search Tv Series</h1>
    <p>Le migliori serie tv a portata di mano</p>

   <form class="search-container">
        <input id="search-bar" type="text" placeholder="search movie or tv-series..."  v-model="search">
        <button class="search-icon" type="button" name="button" @click="searchFilm"><i class="fas fa-search"></i></button>
   </form>

     <!-- Container series -->
    <h2 class="title-section" v-if="series.length > 0">Tv Series</h2>
      <div class="container">
       <!-- Series Card -->
        <div class="card" v-for="serie in series" :key="serie.id">
         <!-- Card Inner -->
          <div class="card-inner">
          <!-- Img Cover -->
           <img :src="'https://image.tmdb.org/t/p/w300' + serie.poster_path" alt="Serie img" class="cover">
          <!-- /Img Cover -->
          <!-- Info Series -->
          <div class="info">
           <h3 class="title">Titolo: {{ serie.name }}</h3>
           <h4>Titolo Originale: {{ serie.original_name }}</h4>
           <!-- Series Original Language -->
           <div class="language">
             <span>Lingua Originale:
             <img :src="'flags/' + serie.original_language + '.png'">
             </span>
           </div>
           <!-- /Series Original Language -->
           <!-- Release Date -->
           <div class="release-date">
            <span>First Air Date: {{ serie.first_air_date }}</span>
           </div>
           <!-- /Release Date -->
           <!-- Overview -->
           <h4 class="title-prev" v-if="serie.overview.length > 0">Overview</h4>
           <div class="overview">
            <p>{{ serie.overview }}</p>
           </div>
           <!-- /Overview -->
         </div>
      <!-- /Info Serie -->
        </div>
      <!-- /Card Inner -->
       </div>
     <!-- /Series Card -->
      </div>
    <!-- /Container series -->
  </div>
</template>
<script>
export default {

   
data() {
  return {
    series: [],
    search: "",
    apiKey: 'febf9a4fc7b46ba8b5e4681cf81209ce',
    urlSearch: 'https://api.themoviedb.org/3/search/',


  }


  },
methods: {
  searchTvSeries() {
         //Chiamata per le SerieTV
       axios.get( this.urlSearch + 'tv' , {
         params: {
           api_key: this.apiKey,
           query: this.search,
           language: "it-IT"
         }
       })
       .then( (response) => {
         this.series = response.data.results;
         this.search = "";
         for ( var i = 0; i < this.series.length; i++ ) {
           // Voto 1/5
            this.series[i].vote_average = Math.ceil(this.series[i].vote_average / 2);
          //Se il voto è >= a 4 stelle lo aggiungo all' array film popolari
         }
       });
  }

}
}

</script>