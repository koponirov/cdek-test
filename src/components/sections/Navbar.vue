<template lang="pug">
  header.menu
    .menu__container
      .menu__logo
        a(href='#')
          img.logo(src="@/assets/icons/cdek.svg" alt="CDEK")
      .menu__list
        nav.menu__sub
          .menu__sub-items
            a.submenu-item(href='#')
              .submenu-item__content Условия открытия
            a.submenu-item(href='#')
              .submenu-item__content Стандарты оформления
            a.submenu-item(href='#')
              .submenu-item__content Сервисы
              img.submenu-item__arrow(src="@/assets/icons/arrow_down.svg")
            a.submenu-item(href='#')
              .submenu-item__content Поддержка
              img.submenu-item__arrow(src="@/assets/icons/arrow_down.svg")
            a.submenu-item(href='#')
              .submenu-item__content Дорожная карта
            a.submenu-item(href='#')
              .submenu-item__content
                img(src="@/assets/icons/search.svg")
            phone
            //.submenu-item__phone
            //    a.submenu-item__phone-number(href="+7 495 009 04 05 ") +7 495 009 04 05
            //    p.submenu-item__phone-text Бесплатно по всей России
</template>

<script>
import Phone from "@/components/common/Phone";
export default {
  name: "Navbar",
  components: {
    Phone
  }
}
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  height: 97px;
  background-color: #fff;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;

  &__container {
    width: 1200px;
    height: 100%;
    min-width: 320px;
    display: flex;
    margin: 0 auto;
  }

  &__logo {
    max-width: 100%;
    display: flex;
    align-items: center;
    .logo {
      width: 115px;
      height: 47px;
    }
  }

  &__list {
    flex: 1 0 auto;
    min-height: auto;
    justify-content: flex-end;
  }

  &__sub {
    display: flex;
    height: 100%;
    margin-left: 35px;

    &__sub-items {
      height: 100%;
      width: 100%;

    }

    .submenu-item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
    }
    .submenu-item__content {
      transition: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: normal;
      text-transform: none;
      color: $black;
    }

    .submenu-item:hover {
      border-bottom: 3px solid #1AB248;
    }

    .submenu-item__arrow {
      margin-left: 6px;
    }

    .submenu-item__phone {
      align-items: center;
      justify-content: center;
      display: flex;
      text-decoration: none;
      flex-direction: column;
      padding: 0 4px;
      margin: 0 0 0 16px;

      .submenu-item__phone-number {
        display: block;
        color: $black;
        font-weight: 500;
        font-size: 20px;
        line-height: 23px;
        text-decoration: none;
        margin-bottom: 2px;
      }
      .submenu-item__phone-text {
        margin: 0;
        font-size: 12px;
        line-height: 17px;
        color: #999999;
        align-self: flex-end;
      }
    }

    @media only screen and (min-width: 1000px) {
      .menu__sub-items {
        display: flex;
        width: 100%;
        justify-content: space-between;

        }
      }
  }

}
</style>
