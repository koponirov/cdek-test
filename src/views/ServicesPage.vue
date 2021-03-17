<template lang="pug">
  div
    paid-services-section
    legal-services-section

</template>

<script>
import PaidServicesSection from "@/components/sections/PaidServicesSection";
import LegalServicesSection from "@/components/sections/LegalServicesSection";
export default {
name: "ServicesPage",
  components: {
    PaidServicesSection,
    LegalServicesSection
  }
}
</script>

<style scoped>

</style>
