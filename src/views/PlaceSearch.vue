<template>
  <div class="home pt-5">
    <h1>Place search<br>(Restaurant near bangsue)</h1>
    <div class="text-left">
    
      <b-button @click="search" :disabled="isLoading" block variant="primary">
        <b-spinner v-if="isLoading" small></b-spinner>
        <font-awesome-icon icon="search" v-if="!isLoading" />
        <span v-if="!isLoading" class="pl-2">Start search</span>
        <span v-if="isLoading" class="pl-2">Loading...</span>
      </b-button>
      <b-row align-v="start" class="pt-3">
        
        <b-col v-for="(place,index) in result" :key="place.id" sm="12" md="6">
            <b-card
                :title="index+1+'. ' +place.name"
                tag="article"
                class="mb-2"
            >
                <b-card-text>
                {{place.vicinity}}
                </b-card-text>
                <!-- <b-button href="#" variant="primary">Open Google</b-button> -->
            </b-card>
        </b-col>
        
        
    </b-row>
        
        
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '@/axiosSCG.js'
export default {
  name: 'place_search',
  data () {
    return {
        result:null,
        isLoading: false
    }
  },
  methods:{
    search(){
      this.isLoading = true
      this.findRestaurantNearBangsue()
      .then(res => {
        console.log('res',res)
        this.result = res.data.data
        this.isLoading = false
      })
      .catch(err =>{
        console.log(err)
        this.isLoading = false
      })
    },
    async findRestaurantNearBangsue(){
      try {
        const response = await axios.get('/findRestaurantNearBangsue');
        console.log(response);
        
        return response
      } catch (error) {
        console.error(error);
        return error
      }
    },
  }
}
</script>
