<template lang="pug">
  footer.footer
    .footer__container
      .footer__menu

        .footer__group--1.footer__group--wrap
          .footer__menu-column
            a(href="#").footer__link.footer__link--title Условия открытия
            a(href="#").footer__link.footer__link--title Стандарты оформления
          .footer__menu-column
            a(href="#").footer__link.footer__link--title Сервисы
            a(href="#").footer__link.footer__link--subtitle Платные
            a(href="#").footer__link.footer__link--subtitle Бесплатные

        .footer__menu-column
          a(href="#").footer__link.footer__link--title Поддержка
          a(href="#").footer__link.footer__link--subtitle Подбор персонала
          a(href="#").footer__link.footer__link--subtitle Аренда помещений
          a(href="#").footer__link.footer__link--subtitle Рекомендуемые поставщики
          a(href="#").footer__link.footer__link--subtitle Документы
          a(href="#").footer__link.footer__link--subtitle Вопросы и ответы

        .footer__contacts
          .footer__group--2.footer__group--wrap-reverse
            a.footer__link.footer__link--question(href="#") Задать вопрос
            .footer__phone
              phone(:is-light="true")

          a.footer__link.footer__link--mail(href="mailto:franch@cdek.ru" target="_blank") franch@cdek.ru

          .footer__social-links
            a.footer__link.footer__link--social(href="https://www.instagram.com/cdek_official/?hl=ru" target="_blank") Instagram
            a.footer__link.footer__link--social(href="https://www.facebook.com/edostavka/" target="_blank") Facebook

          .footer__link.footer__link--cdek Курьерская компания СДЭК, ©2000 — 2021
          a.footer__link.footer__link--cdek(href="#") Политика конфиденциальности


</template>

<script>
import Phone from "@/components/common/Phone";

export default {
  name: "Footer",
  components: {
    Phone
  }
}
</script>

<style scoped lang="scss">
.footer {
  height: 303px;
  padding-top: 60px;
  background-color: $black-deep;
  color: $white;


  &__container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
  }

  &__menu {
    display: flex;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-left: auto;
  }

  &__group--1 {
    display: flex;
  }

  &__group--wrap {
    flex-wrap: wrap;
  }

  &__group--wrap-reverse {
    flex-wrap: wrap-reverse;
    justify-content: flex-end;
  }

  &__menu-column {
    display: flex;
    flex-direction: column;
    min-width: max-content;
    margin-right: 70px;
  }

  &__link {
    color: $white
  }

  &__link--title {
    font-weight: 700;
    font-size: 17px;
    line-height: 23px;
    margin-bottom: 13px;
  }

  &__link--subtitle {
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 10px;
  }

  &__link--question {
    display: block;
    border: 1px solid $white;
    font-weight: 300;
    font-size: 15px;
    line-height: 20px;
    padding: 15px 35px 19px 35px;
    margin-right: 51px;
  }

  &__social-links {
    margin-top: 64px;
    margin-bottom: 15px;
  }

  &__link--social {
    margin-left: 20px;
  }

  &__link--cdek {
    font-size: 14px;
    line-height: 19px;
    font-weight: 400;
    color: $grey;
    margin-bottom: 6px;
  }

  &__link--mail {
    color: $green;
  }

}





@media only screen and (min-width: 768px) and (max-width: 999px) {
  .footer {
    &__container {
      min-width: 708px;
      max-width: 90%;
      padding: 0 30px;
    }
    &__group--2 {
      display: flex;
      justify-content: flex-end;
    }

    &__menu-column {
      margin-right: 43px;
    }

    &__link--title {
      font-size: 15px;
      line-height: 19px;
    }

    &__link--subtitle {
      font-size: 13px;
      line-height: 18px;
    }
    &__contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-left: 0;
    }
    &__social-links {
      align-self: flex-end;
    }

    &__link--mail {
      margin-top: 17px;
      margin-left: auto;
    }
    &__link--question {
      margin-top: 17px;
      margin-right: 0;
    }


    &__link--cdek {
      font-size: 12px;
      line-height: 19px;
      margin-left: auto;
    }
  }
}

@media only screen and (min-width: 320px) and (max-width: 767px) {
  .footer {
    height: auto;
    padding-top: 40px;
    padding-bottom: 50px;
    &__container {
      min-width: 280px;
      max-width: 90%;
    }
    &__menu {
      justify-content: center;
    }
    &__menu-column {
      display: none;
    }
    &__contacts {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin:0;
    }
    &__phone {
      margin-right: 28%;
      margin-bottom: 32px;

    }
    &__link--question {
      margin:0 auto;
    }
    &__link--mail {
      margin-top: 32px;
    }
    &__social-links {
      margin-top: 32px;
      margin-bottom: 15px;
    }
  }
}


</style>
