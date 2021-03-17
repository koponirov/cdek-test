<template lang="pug">
  section.paid-services
    .paid-services__container
      h1.paid-services__title Платные сервисы
      p.paid-services__subtitle Мы поддерживаем наших партнеров на каждом этапе развития бизнеса
      .card
        .card__list
          .card__item(v-for="item in services")
            .card__item-content
              .card__icon
                img.card__img(:src="require(`../../assets/icons/${item.icon}.svg`)")
              .card__text {{ item.name }}

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

  &__subtitle {
    margin-bottom: 43px;
    font-size: 17px;
    line-height: 24px;
    font-weight: 400;
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




}
</style>
