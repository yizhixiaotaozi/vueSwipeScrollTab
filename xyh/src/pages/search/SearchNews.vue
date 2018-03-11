<template>
  <div>
    <Search @on-cancel="onCancel" ref="search">

    </Search>
  </div>
</template>
<script>
  import { Search } from 'vux'
  export default {
    name: 'search',
    components: {Search},
    methods: {
      onCancel: function(){
        this.$router.go(-1)
      }
    },
	beforeRouteEnter (to, from, next) {
	  console.log('enter search')
	  next(vm => {
		setTimeout(() => {
		  console.log('focus')
		  vm.$refs.search.setFocus()
		},1000)
	  })
	}
  }
</script>
<style>

</style>
