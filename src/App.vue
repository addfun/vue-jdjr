<template>
  <div id="app">
    <router-view :user="user"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      user: {}
    };
  },
  created(){
    const _this = this
    this.axios.get('/api/data')
        .then(function (response) {
          if(response.status === 200){
            _this.user=response.data.data
            console.log(_this.user)
          }
        })
        .catch(function (error) {
          console.log(error);
        })
  }
}
</script>

<style>

</style>
