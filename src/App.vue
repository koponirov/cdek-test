<template lang="pug">
  div(id="app")
    navbar
    main.content
      router-view
    footer-menu

</template>
<script>
import Navbar from "@/components/sections/Navbar";
import FooterMenu from "@/components/sections/Footer";
export default {
  name: 'App',
  components: {
    Navbar,
    FooterMenu
  }
}
</script>
<style lang="scss">

</style>
