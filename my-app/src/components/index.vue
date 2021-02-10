
<template>
  <nav>

      <v-toolbar app dark>
        <v-toolbar-side-icon @click="drawer=!drawer">
            click me !! 
        </v-toolbar-side-icon>
        <v-toolbar-title class="headline">
          <span>Hello world</span>
        </v-toolbar-title>
      </v-toolbar>


      <v-container>
      <div>
        <h1 class="primary"><center>THIS IS TEST SERVER</center></h1>
      </div>
      
      <div class="purple lighten-1 text-center">
        <span class="white--text">Lorem ipsum</span>
      </div>

        <v-card
          v-click-outside="onClickOutside"
          :color="active ? 'primary' : undefined"
          :dark="active"
          class="mx-auto"
          height="256"
          rounded="xl"
          width="256"
          @click="active = true"
        >
          <div class="text-h6 text-md-h4 fill-height d-flex align-center justify-center">
            {{ active ? 'Click Outside' : 'Click Me' }}
          </div>
        </v-card>
 
      </v-container>
    

     <v-navigation-drawer app v-model="drawer">
        <p>Filmsuphanut</p>
      </v-navigation-drawer>


</nav>
</template>


 <script>
  export default {
    data: () => (
    {
      active: false,
      drawer: true,
    }
    ),

    methods: {
      onClickOutside () {
        this.active = false
      },
      

    },
  }
</script>



