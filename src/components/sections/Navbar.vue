<template lang="pug">
  header.menu
    .menu__container
      .menu__logo
        router-link(to="/")
          img.logo(src="@/assets/icons/cdek.svg" alt="CDEK")

      nav.menu__nav(v-if="!mobileMenu")
        .menu__items
          router-link.menu__item(to="/start" )
            .menu__item-content Условия открытия
          router-link.menu__item(to="/" )
            .menu__item-content Стандарты оформления
          router-link.menu__item(to="/services" )
            .menu__item-content.menu__item-content--dropdown Сервисы
          router-link.menu__item(to="/support" )
            .menu__item-content.menu__item-content--dropdown Поддержка
          router-link.menu__item(to="/" )
            .menu__item-content Дорожная карта
          router-link.menu__item(to="/" )

      .menu__search
        .menu__search-icon(@click="showSearch")


      phone.menu__phone

      .menu__burger(@click="toggleMenuShow" v-if="!mobileMenu")
        .menu__burger-icon
          span

    aside.menu.menu--mobile(v-if="mobileMenu")
      span.menu__item-content--mobile(@click="toggleMenuShow") закрыть
      nav.menu__nav--mobile
        .menu__items--mobile

          router-link.menu__item--mobile(to="/start" )
            .menu__item-content--mobile Условия открытия
          router-link.menu__item.menu__item--mobile(to="/" )
            .menu__item-content--mobile Стандарты оформления
          router-link.menu__item--mobile(to="/services" )
            .menu__item-content--mobile.menu__item-content--dropdown Сервисы
          router-link.menu__item--mobile(to="/support" )
            .menu__item-content--mobile.menu__item-content--dropdown Поддержка
          router-link.menu__item--mobile(to="/" )
            .menu__item-content--mobile Дорожная карта
          router-link.menu__item--mobile(to="/" )

</template>

<script>
import Phone from "@/components/common/Phone";
export default {
  name: "Navbar",
  components: {
    Phone
  },
  data() {
    return {
      mobileMenu: false,
    }
  },
  methods: {
    showSearch() {
      alert('show search box')
    },
    toggleMenuShow() {
      this.mobileMenu = !this.mobileMenu
    }
  }
}
</script>

<style scoped lang="scss">
.menu {
  display: flex;
  align-items: center;
  height: 97px;
  border-bottom: 1px solid $grey-light;
  background-color: $white;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 10;

  &--mobile {
    width: 20em;
    height: 100vh;
    margin-left: auto;

  }
  &__nav--mobile {
    flex-direction: column;
  }
  &__item-content--mobile {
    color: $black;
  }

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
    margin-right: 40px;
    .logo {
      width: 115px;
      height: 47px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

  }

  &__items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
  }

  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    box-sizing: border-box;
    text-decoration: none;
    border-bottom: 3px solid $white;
    transition: border-bottom-color .2s ease-in-out;

    &-content {
      transition: none;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      letter-spacing: normal;
      text-transform: none;
      color: $black;
    }
    &-content--dropdown {

    }
    &-content--dropdown:after {
      content: url("../../assets/icons/arrow_down.svg");
      margin-left: 6px;
    }
  }

  .router-link-exact-active {
    border-bottom: 3px solid #1AB248;
  }

  &__search {
    display: flex;
    align-items: center;
    height: 100%;

    &-icon {
      cursor: pointer;
      width: 22px;
      height: 22px;
      background: url("../../assets/icons/search.svg");
    }
  }
  .menu__phone {
    margin-left: 24px;
  }

  &__burger {
    display: none;
    align-items: center;
    height: 100%;

    &-icon {
      display: flex;
      align-items: center;
      position: relative;
      width: 30px;
      height: 30px;
      cursor: pointer;
      z-index: 1;
    }


    &-icon > span,
    &-icon > span::before,
    &-icon > span::after {
      display: block;
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #616161;
    }
    &-icon > span::before {
      content: '';
      top: -8px;
      width: 50%;
    }
    &-icon > span::after {
      content: '';
      top: 8px;
    }
  }

}

@media only screen and (min-width: 768px) and (max-width: 1279px) {
  .menu {
    &__container {
      min-width: 708px;
      max-width: 90%;
    }
    &__nav {
      display: none;
    }
    &__search {
      margin-left: auto;
    }
    &__burger {
      display: flex;
      margin-left: 24px;
    }
  }
}
@media only screen and (min-width: 320px) and (max-width: 767px) {
  .menu {
    height: 54px;

    &__container {
      min-width: 280px;
      max-width: 90%;
    }
    &__logo {
      .logo {
        height: 34px;
        width: 81px;
      }
    }
    &__nav {
      display: none;
    }
    &__search {
      margin-left: auto;
    }
    &__phone {
      display: none;
    }
    &__burger {
      display: flex;
      margin-left: 24px;
      margin-right: 20px;
    }


  }
}
</style>
