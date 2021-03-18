<template lang="pug">
  .phone(:class="[isLight ? phoneLight : phoneDark]")
    a.phone__number(href="tel:+7 495 009 04 05 ") +7 495 009 04 05
    p.phone__label Бесплатно по всей России
</template>

<script>
export default {
  name: "Phone",
  data() {
    return {
      phoneLight: 'phone--light',
      phoneDark: 'phone--dark'
    }
  },
  props: {
    isLight: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  text-decoration: none;


  &__number {
    align-self: flex-end;
    display: block;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-decoration: none;
    margin-bottom: 2px;
  }
  &__label {
    margin: 0;
    font-size: 12px;
    line-height: 17px;
    font-weight: 400;
    align-self: flex-end;
  }

  &--dark {
    .phone__number {
      color: $black;
    }
    .phone__label {
      color: #999999;
    }
  }

  &--light {
    .phone__number {
      color: $white;
    }
    .phone__label {
      color: $white;
    }
  }
}


</style>
