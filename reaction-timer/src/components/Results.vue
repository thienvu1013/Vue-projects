<template>
  <div class="results">
      <h1>{{this.msg}}</h1>
      <h2>Reaction time: {{this.score}} ms </h2>
  </div>
</template>

<script>
export default {
    props: ["score"],
    data(){
        return{
            msg:''
        }
    },
    created(){
        this.evaluate()  
    },
    methods:{
        evaluate(){
            if (this.score < 200){
                this.msg = "Amazing"
            }
            else if (this.score < 300){
                this.msg = "Better than average"
            }
            else if (this.score <400){
                this.msg = "Average"
            }
            else if (this.score <400){
                this.msg = "Too slow"
            }
            else{
                this.msg = "Snail pace"
            }
        }
    
    }
}
</script>

<style>
    .results{
            width:400px;
            border-radius:20px;
            background:#ffe59e;
            color:#0faf87;
            text-align:center;
            padding:100px 0;
            margin:40px auto;
    }

</style>