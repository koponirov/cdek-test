<template lang="pug">
  section.start-conditions
    .start-conditions__container
      .start-conditions__content
        h1.start-conditions__title Условия открытия
        p.start-conditions__text Открывая подразделение СДЭК в своем населенном пункте, вы даете возможность людям вокруг легко и выгодно отправлять и получать посылки по всему миру.
        a.start-conditions__link Смотреть условия
        .card
          span.card__title 2000+ офисов франчайзи
          p.card__text В 2009 году наша компания начала развитие франчайзинговой сети.
            | На данный момент в СДЭК насчитывается более 2000 офисов франчайзи,
            | более 30% из которых — мультифранчайзинговые.
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
  background: url("../../assets/img/start_background.png") center no-repeat;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__content {
    width: 492px;
    padding-top: 100px;
  }

  &__title {
    color: $black-deep;
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

@media only screen and (min-width: 768px) and (max-width: 1279px) {
  .start-conditions {

    &__container {
      min-width: 708px;
      max-width: 90%;
    }
  }
}

@media only screen and (min-width: 768px) and (max-width: 1172px) {
  .start-conditions {
    height: 319px;
    background: url("../../assets/img/start_background_768.png") center no-repeat;

    &__container {
      min-width: 708px;
      max-width: 90%;
    }

    &__content {
      padding-top: 50px;
    }

    &__title {
      font-size: 30px;
      line-height: 35px;
      margin: 0;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
      width: 330px;
      margin-top: 15px;
    }
    &__link {
      margin-top: 25px;
    }

    .card {
      left: 0;
      bottom: -131px;
      height: 163px;
      width: 708px;
      box-sizing: border-box;
      padding: 30px;
      box-shadow: -4px 15px 50px rgba(0, 0, 0, 0.11);

      &__title::before {
        top:-15px;
      }

      &__text {
        margin-top: 24px;
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
      }
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .start-conditions {
    height: 458px;
    margin-top: 0;
    background: url("../../assets/img/start_background_320.png") top no-repeat $white-smooth;

    &__container {
      min-width: 280px;
      max-width: 90%;
    }
    &__content {
      padding-top: 202px;
      width: 100%;
    }
    &__title {
      font-size: 26px;
      line-height: 30px;
      margin: 0;
    }
    &__text {
      margin-top: 20px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
    }
    &__link {
      margin-top: 25px;
      font-size: 14px;
      line-height: 20px;
    }
    .card {
      display: none;
    }
  }
}

</style>
