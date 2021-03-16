<template lang="pug">
  section.start-conditions
    .start-conditions__container
      .promo
        h1.promo__title Условия открытия
        p.promo__text Открывая подразделение СДЭК в своем населенном пункте, вы даете возможность людям вокруг легко и выгодно отправлять и получать посылки по всему миру.
        a.promo__link Смотреть условия
        .card
          span.card__title 2000+ офисов франчайзи
          p.card__text В 2009 году наша компания начала развитие франчайзинговой сети.
            |На данный момент в СДЭК насчитывается более 2000 офисов франчайзи,
            |более 30% из которых — мультифранчайзинговые.
</template>

<script>
export default {
name: "StartConditionsSection"
}
</script>

<style scoped lang="scss">
.start-conditions {

  width: 100%;
  height: 521px;
  background-image: url("../../assets/img/start_background.png");
  background-position: center;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  .promo {
    width: 492px;
    padding-top: 100px;

    &__title {
      color: $deep-black;
      font-weight: 500;
      font-size: 50px;
      line-height: 58px;
    }

    &__text {
      font-weight: 400;
      font-size: 17px;
      line-height: 25px;
      margin-top: 25px;
    }

    &__link {
      display: block;
      width: fit-content;
      border-radius: 5px;
      margin-top: 35px;
      padding: 16px 35px 18px 35px;
      color: $white;
      background-color: $green;
      font-weight: 700;
      font-size: 16px;
      line-height: 22px;
    }
  }

  .card {
    position: absolute;
    padding: 40px;
    width: 272px;
    height: 220px;
    right: 0;
    bottom: -32px;
    background: $white;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.07);

    &__title {
      position: relative;
      font-weight: 500;
      font-size: 26px;
      line-height: 31px;
      margin-left: 78px;
      display: inline-block;
    }
    &__title::before {
      content: "";
      border-radius: 13px;
      background: $green url("../../assets/icons/tag.svg") no-repeat center;
      display: block;
      width: 60px;
      height: 60px;
      position: absolute;
      left: -78px;
    }
    &__text {
      font-weight: 300;
      font-size: 15px;
      line-height: 22px;
    }
  }
}
</style>
