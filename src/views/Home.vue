<template>
  <div class="home pt-5">
    <h1>Find N Number</h1>
    <div class="text-left">
      <div class="form-group">
        <label for="nNumber">Please input N Number (eg 2,4,9,..)</label>
        <input type="number" v-model="nNumber" class="form-control" id="nNumber" placeholder="Enter N Number">
      </div>
      <button @click="submit" class="btn btn-primary">Submit</button>
      <p>{{result}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from '@/axiosSCG.js'
export default {
  name: 'home',
  data () {
    return {
      nNumber: 0,
      result: null
    }
  },
  methods:{
    submit(){
      this.findNNumber(this.nNumber)
      .then(res => {
        this.result = res
      })
    },
    async findNNumber(n){
      try {
        const formData = {
          action: 'all',
          body: {
            numberOfPosition: n
          }
        }
        const response = await axios.post('/find_n_number',formData);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  }
}
</script>
