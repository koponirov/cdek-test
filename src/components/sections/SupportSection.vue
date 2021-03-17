<template lang="pug">
  section.support
    .support__background
      .support__container
        .support__content
          .support__descr
            h1.support__title Портал поддержки франчайзи СДЭК
            p.support__subtitle «Здесь мы объединили всю полезную информацию для успешного старта и плодотворного развития вашего бизнеса.
            p.support__text Необходимые материалы, стандарты и рекомендации позволят вам эффективно выстроить бизнес-процессы с соблюдением требований компании.
                    | Дополнительные услуги разработаны для вашего удобства и оптимизации процессов.»
            p.support__name Леонид Гольдорт
            p.support__name-position Генеральный директор
</template>

<script>
export default {
  name: "SupportSection"
}
</script>

<style scoped lang="scss">


.support {
  width: 100%;
  height: 598px;
  background: #0C9A37;
  color: $white;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__background {
    width: 100%;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
    background:
        url("../../assets/img/CEO.png") bottom right 263px no-repeat,
        url("../../assets/img/star_big.png") bottom right 180px no-repeat,
        url("../../assets/img/star_clone_1.png") bottom right 120px no-repeat,
        url("../../assets/img/star_clone_2.png") bottom right 60px no-repeat,
        url("../../assets/img/star_clone_3.png") bottom right  no-repeat;
  }
  &__content {
    width: 100%;
    height: 100%;

  }

  &__descr {
    width: 520px;
    padding-top: 105px;
  }
  &__title {
    margin-top: 0;
    font-weight: 500;
    font-size: 50px;
    line-height: 58px;
  }
  &__subtitle,&__text {
    font-size: 17px;
    line-height: 24px;
    font-weight: 400;
  }
  &__subtitle {
    margin-top: 25px;
    width: 520px;
  }
  &__text {
    margin-top: 18px;
    width: 518px;
    margin-bottom: 35px;
  }
  &__name,&__name-position {
    font-size: 17px;
    line-height: 24px;
    font-weight: 700;
    margin-top: 0;
    margin-bottom: 2px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1279px) {
  .support {
    height: 429px;

    &__background {
      max-width: 100%;
      background:
          url("../../assets/img/CEO_768.png") bottom right 80px no-repeat,
          url("../../assets/img/star_768.png") bottom right 30px no-repeat,
          url("../../assets/img/star_clone_1_768.png") bottom right  no-repeat,
          url("../../assets/img/star_clone_2_768.png") bottom right  no-repeat,
          url("../../assets/img/star_clone_3_768.png") bottom right  no-repeat;
    }
    &__container {
      max-width: 708px;
    }
    &__descr {
      padding-top: 48px;

    }
    &__title {
      width: 424px;
      font-size: 30px;
      line-height: 35px;
    }
    &__subtitle,&__text {
      font-size: 14px;
      line-height: 19px;
      width: 364px;
    }
    &__text {
      margin-bottom: 25px;
    }
    &__name,&__name-position {
      font-size: 14px;
      line-height: 19px;
    }
  }
}
</style>
