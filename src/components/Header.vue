<script setup lang="ts">
import DrawerMenu from "./DrawerMenu.vue";
import { computed, ref } from "vue";

const props = defineProps({
  bgColor: {
    type: String,
    required: false,
    default: "none",
  },
});

const isOpen = ref(false);
const openMenu = () => {
  isOpen.value = !isOpen.value;
};
const openClass = computed(() => {
  return { "-open": isOpen.value };
});
const headerStyle = computed(() => {
  return { "--background-color": props.bgColor };
});
</script>

<template>
  <header :class="openClass" :style="headerStyle">
    <a href="/" class="logo">
      <div class="logo-icon">
        <img src="/svgs/logo.svg" alt="logo" />
      </div>
      <div>
        <p class="logo-text">さくらいとれとれ市場</p>
        <p class="logo-text-sub">Sakurai Toretore Market</p>
      </div>
    </a>
    <div class="icons">
      <div class="shopping-cart">
        <a href="#">
          <img
            class="shopping-cart-img"
            src="/svgs/shopping-cart-black.svg"
            alt="shoppng-cart"
          />
        </a>
      </div>
      <div class="hamburger-menu" @click.prevent="openMenu">
        <div class="line-group">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <p>MENU</p>
      </div>
    </div>

    <ul class="nav">
      <li class="nav-text">
        <a href="/information">
          店舗情報
          <p class="nav-text-sub">INFORMATION</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/product">
          取り扱い商品
          <p class="nav-text-sub">PRODUCT</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/news/page/1">
          お知らせ
          <p class="nav-text-sub">NEWS</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/shippers">
          出荷者募集
          <p class="nav-text-sub">SHIPPERS</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/contacts">
          お問い合わせ
          <p class="nav-text-sub">CONTACT US</p>
        </a>
      </li>
    </ul>
  </header>
  <Transition name="fade">
    <div v-if="isOpen">
      <DrawerMenu />
    </div>
  </Transition>
</template>

<style lang="scss" scoped>
header {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  padding: 1% 3% 1% 3%;
  z-index: 100;
  background-color: var(--background-color);
  &.-open {
    animation: fadeIn 0.6s ease-out forwards;
  }

  @keyframes fadeIn {
    20% {
      background: #fff;
    }
    100% {
      background: none;
    }
  }
}

.logo {
  display: flex;
  align-items: flex-end;
}
.logo-icon {
  width: 4rem;
  height: 4rem;
}
.logo-text {
  font-family: var(--m-plus-rounded-1c);
  font-size: 1.3rem;
  font-weight: 700;
}
.logo-text-sub {
  font-size: 0.9rem;
  color: #5f8934;
  font-family: var(--josefin-sans);
  letter-spacing: 0.03rem;
}

.nav {
  display: flex;
  gap: 3rem;
}
.nav-text {
  font-weight: 500;
  font-size: 1rem;
  text-align: center;
  letter-spacing: 0.06rem;
}
.nav-text-sub {
  font-family: var(--josefin-sans);
  font-size: 0.6rem;
  font-weight: 400;
  color: #5f8934;
  letter-spacing: 0.08rem;
}

.shopping-cart {
  display: none;
}

.hamburger-menu {
  display: none;
}

@media screen and (max-width: 767px) {
  header {
    align-items: flex-end;
  }
  .logo-text {
    font-size: 15px;
  }
  .logo-text-sub {
    font-size: 9px;
  }
  .nav {
    display: none;
  }
  .icons {
    display: flex;
    gap: 1rem;
  }
  .shopping-cart {
    display: flex;
    border-radius: 50%;
    border: solid 1.3px;
    width: 2.6rem;
    height: 2.6rem;
    justify-content: center;
    align-items: center;
  }
  .shopping-cart-img {
    width: 1.5rem;
    height: 1.5rem;
  }
  .hamburger-menu {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    gap: 5px;
  }

  .hamburger-menu .line-group {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .hamburger-menu .line {
    width: 35px;
    height: 1.3px;
    background-color: black;
  }

  .hamburger-menu p {
    font-size: 0.8rem;
    font-family: var(--josefin-sans);
    font-weight: 500;
  }
}
</style>
