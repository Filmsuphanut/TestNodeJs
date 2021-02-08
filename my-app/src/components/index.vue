
<template>

    <v-container>
      <div>
        <h1 class="primary"><center>THIS IS TEST SERVER</center></h1>
      </div>
      
      <div class="purple lighten-1 text-center">
        <span class="white--text">Lorem ipsum</span>
      </div>

      <div v-if="Math.random() > 0.5">
        Now you see me
      </div>
      <div v-else>
        Now you don't
      </div>


  </v-container>


</template>





<script>
  export default {

  }
</script>
