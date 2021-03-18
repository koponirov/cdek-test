<template lang="pug">
  section.paid-services
    .paid-services__container
      h1.paid-services__title Платные сервисы
      p.paid-services__text Мы поддерживаем наших партнеров на каждом этапе развития бизнеса
      .card
        .card__list
          .card__item(v-for="(item, idx) in services" :key="idx")
            .card__item-content
              .card__icon
                img.card__img(:src="require(`../../assets/icons/${item.icon}.svg`)")
              .card__text {{ item.name }}
      h2.paid-services__subtitle  Подбор персонала
      p.paid-services__subtext В нашей компании с июня 2017 года успешно работает проект «Аутсорсинг подбора персонала».
                              |Отдел персонала поможет вам найти лучших сотрудников и сэкономить время и
                              |деньги на поиск и отбор сотрудников.
      a.paid-services__link(href="#") Подробнее


</template>

<script>
export default {
  name: "PaidServicesSection",
  data() {
    return {
      services: [
        {name: 'Подбор персонала', icon: 'person'},
        {name: 'Юридические услуги', icon: 'case'},
        {name: 'Бухгалтерские услуги', icon: 'calc'},
        {name: 'Кредитный контроль', icon: 'diagram'},
        {name: 'Услуга колл-центр', icon: 'call_center'},
        {name: 'Бизнес обучение', icon: 'book'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.paid-services {
  width: 100%;
  height: 365px;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__title {
    margin-top: 50px;
    margin-bottom: 20px;
    font-weight: 500;
    font-size: 50px;
    line-height: 58px;
  }

  &__text {
    margin-bottom: 43px;
    font-size: 17px;
    line-height: 24px;
    font-weight: 400;
  }

  .paid-services__subtitle,
  .paid-services__subtext {
    display: none;
  }

  .card {
    display: flex;
    align-items: center;
    width: 100%;
    height: 120px;
    background: $white;
    box-shadow: 0 0 25px rgba(0, 0, 0, 0.07);

    &__list {
      display: flex;
      padding-left: 35px;

    }

    &__item-content {
      display: flex;
      margin-right: 30px;
    }

    &__icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__text {
      width: fit-content;
      max-width: 105px;
      margin-left: 14px;
      font-size: 15px;
      line-height: 20px;
      color: $black-deep;
    }
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
@media only screen and (min-width: 768px) and (max-width: 1279px) {
  .paid-services {

    &__container {
      min-width: 708px;
      max-width: 90%;
    }
  }
}
@media only screen and (min-width: 768px) and (max-width: 1199px) {
  .paid-services {
    height: 396px;
    background:
        url("../../assets/img/hexagon.svg") bottom 103px right 265px no-repeat,
        url("../../assets/img/diary.png") bottom 60px right 110px no-repeat,
        url("../../assets/img/pen.png") bottom 100px right 40px no-repeat;

    .card {
      display: none;
    }

    &__title {
      font-size: 30px;
      line-height: 35px;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
    }
    .paid-services__subtitle {
      display: block;
      margin-top: 30px;
      margin-bottom: 0;
    }
    .paid-services__subtext {
      display: block;
      margin-top: 19px;
      width: 354px;
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .paid-services {
    height: 615px;
    margin-bottom: 0;
    background:
        url("../../assets/img/hexagon_320.svg") top 210px left 15px no-repeat,
        url("../../assets/img/diary_320.png") top 150px right 70px no-repeat,
        url("../../assets/img/pen_320.png") top 210px right 10px no-repeat;

    &__container {
      min-width: 280px;
      max-width: 90%;
    }
    .card {
      display: none;
    }
    &__title {
      font-size: 26px;
      line-height: 30px;
      margin-top: 25px;
      margin-bottom: 0;
    }

    &__text {
      font-size: 14px;
      line-height: 20px;
      width: 266px;
      margin-top: 12px;
      margin-bottom: 0;
    }
    .paid-services__subtitle {
      display: block;
      margin-top: 25px;
      margin-bottom: 0;
      font-size: 20px;
      line-height: 28px;
    }
    .paid-services__subtext {
      display: block;
      margin-top: 230px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
