<template lang="pug">
  section.advantages
    .advantages__container
      h2.advantages__title Бизнес по франшизе СДЭК― это
      .advantages__list

        .advantages__item(v-for="item in advantages")
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
  height: 471px;
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
    max-width: 1046px;
    margin-top: 35px;
  }
  &__item {
    width: 348px;
  }

  &__item-content {
    display: flex;
  }

  &__icon {
    margin-right: 18px;
    align-self: flex-start;
  }

  &__descr {
    .advantages__subtitle {
      margin-top: 8px;
      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
    }
    .advantages__subtext {
      margin-top: 12px;
      font-weight: 300;
      font-size: 15px;
      line-height: 21px;
      width: 211px;
    }
  }
}
</style>
