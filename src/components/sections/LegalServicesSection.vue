<template lang="pug">
  section.legal-services
    .legal-services__container
      .legal-services__content
        .legal-services__descr
          h2.legal-services__title Юридические услуги
          p.legal-services__text Успешная защита ваших интересов сотрудниками юридического отдела компании основана
              | на многообразной практике судебных споров и многолетнем опыте ведения судебных дел.
          a.legal-services__link(href="#") Подробнее

</template>

<script>
export default {
  name: "LegalServicesSection"
}
</script>

<style scoped lang="scss">
.legal-services {
  height: 450px;
  width: 100%;
  margin-bottom: 176px;
  background-color: $white-smooth;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__content {
    width: 100%;
    height: 100%;
    background:
        url("../../assets/img/case.png") bottom 30px left 115px no-repeat,
        url("../../assets/img/star.png") bottom left -80px no-repeat,
        url("../../assets/img/triangle.svg") center left 44% no-repeat ,
        url("../../assets/img/stripe.png") top right 5px no-repeat ,
        url("../../assets/img/stripe.png") top right 20px no-repeat ,
        url("../../assets/img/glasess.png") bottom 28px right 14px no-repeat;

  }
  &__descr {
    width: 50%;
    height: 100%;
    margin-left: auto;
    padding-top: 90px;
  }
  &__title {
    font-weight: 500;
    font-size: 35px;
    line-height: 40px;
    margin-bottom: 20px;
  }
  &__text {
    width: 480px;
    font-weight: 300;
    font-size: 17px;
    line-height: 25px;
  }
  &__link {
    display: block;
    width: fit-content;
    border-radius: 5px;
    margin-top: 30px;
    padding: 13px 46px 13px 30px;
    color: $white;
    background-color: $green;
    font-weight: 700;
    font-size: 15px;
    line-height: 21px;
    position: relative;
  }
  &__link:after {
    content: url("../../assets/icons/arrow_right.svg");
    position: absolute;
    right: 27px;
    top: 15px;
  }
}
</style>
