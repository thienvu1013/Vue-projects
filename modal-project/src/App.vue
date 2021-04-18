<template>
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="number in evenNumberList">{{number}}</li>
  </ul>
  <!-- <Modal/> -->
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components:{ Modal },
  data(){
    return{
      theList:[1,2,3,4],
      title:"My first vue app :)"
    }
  },
  computed:{
    evenNumberList(){
      return this.theList.filter((number)=>number%2===0)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
