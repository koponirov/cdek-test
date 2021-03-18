<template lang="pug">
  section.advantages
    .advantages__container
      h2.advantages__title Бизнес по франшизе СДЭК― это
      .advantages__list

        .advantages__item(v-for="(item, idx) in advantages" :key="idx")
          .advantages__item-content
            img.advantages__icon(:src="require(`../../assets/icons/${item.icon}.svg`)")
            .advantages__descr
              p.advantages__subtitle {{ item.title}}
              p.advantages__subtext {{ item.text}}
</template>

<script>
export default {
  name: "AdvantagesSection",
  data() {
    return {
      advantages: [
        {title: 'Прибыльно', text: 'Прибыль с 1 дня, окупаемость от 3 месяцев', icon: 'wallet'},
        {title: 'Проверенный бренд', text: 'Работа под международным брендом', icon: 'globus'},
        {title: 'Обучение и поддержка', text: 'Бесплатное обучение', icon: 'safety'},
        {title: 'Продуманная логистика', text: 'Готовые логистические схемы и тарифы', icon: 'map'},
        {title: 'Постоянное развитие', text: 'Продвижение ваших услуг в России и за рубежом', icon: 'rocket'},
        {title: 'Простая интеграция', text: 'Собственное ПО, автоматизация', icon: 'monitor'},
      ]
    }
  },
}
</script>

<style scoped lang="scss">
.advantages {
  min-height: 471px;
  width: 100%;

  &__container {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
  }

  &__title {
    padding-top: 111px;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 35px;
  }

  &__item {
    width: 348px;
    margin-bottom: 40px;
  }

  &__item-content {
    display: flex;

  }

  &__icon {
    margin-right: 18px;
    align-self: flex-start;
  }


  &__subtitle {
    margin-top: 8px;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
  }

  &__subtext {
    margin-top: 12px;
    font-weight: 300;
    font-size: 15px;
    line-height: 21px;
    width: 211px;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1279px) {
  .advantages {

    &__container {
      min-width: 708px;
      max-width: 90%;
    }

    &__title {
      padding-top: 190px;
    }

    &__list {
      margin-top: 30px;
    }

    &__item {
      width: 339px;
      margin-bottom: 40px;
      margin-right: 14px;
    }
    &__subtitle {
      font-size: 16px;
      line-height: 21px;
    }

    &__subtext {
      margin-top: 10px;
      width: 100%;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .advantages {
    margin-top: 0;


    &__container {
      min-width: 280px;
      max-width: 90%;
    }
    &__title {
      padding-top: 0;
      margin-top: 50px;
      font-size: 20px;
      line-height: 28px;
    }
    &__item {
      margin-bottom: 30px;
    }
  }
}
</style>
