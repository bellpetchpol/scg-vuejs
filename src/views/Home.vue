<template>
  <div class="home pt-5">
    <h1>Find N Number</h1>
    <div class="text-left">
      <div class="form-group">
        <label for="nNumber">Please input N Number (eg 2,4,9,..)</label>
        <input type="number" v-model="nNumber" class="form-control" id="nNumber" placeholder="Enter N Number">
      </div>
      <b-button @click="submit" :disabled="isLoading" block variant="primary">
        <b-spinner v-if="isLoading" small></b-spinner>
        <span v-if="!isLoading" >Submit</span>
      </b-button>
      
    </div>
    <div class="pt-3" v-if="result.length > 0">
      <h3>Result</h3>
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
      result: [],
      isLoading: false
    }
  },
  methods:{
    submit(){
      this.isLoading = true
      this.nNumber = parseInt(this.nNumber).toString()
      if (this.nNumber == 0) {
        this.result = 'If you input 0 try increase it'
        this.isLoading = false
      } else {
        if(localStorage.getItem('scg_n_'+this.nNumber)) {
          this.result = JSON.parse(localStorage.getItem('scg_n_'+this.nNumber))
          this.isLoading = false
        } else {
          this.findNNumber(this.nNumber)
          .then(res => {
            console.log('res',res)
            this.result = res.data.data
            localStorage.setItem('scg_n_'+this.nNumber, JSON.stringify(this.result))
            this.isLoading = false
          })
          .catch(err =>{
            this.result = [err+' If you input 0 try increase it']
            this.isLoading = false
          })
        }
      }
      
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
        
        return response
      } catch (error) {
        console.error(error);
        return error
      }
    },
  }
}
</script>
