<template>
  <div class="wrapper">
    <ul class="nav">
      <span class="shape-upper-left"></span>
      <span class="shape-bottom-right"></span>
      <li class="nav-text">
        <a href="/information"
          >店舗情報
          <p class="nav-text-sub">INFOMATION</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/product"
          >取り扱い商品
          <p class="nav-text-sub">PRODUCT</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/news/page/1"
          >お知らせ
          <p class="nav-text-sub">NEWS</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/shippers"
          >出荷者募集
          <p class="nav-text-sub">SHIPPERS</p>
        </a>
      </li>
      <li class="nav-text">
        <a href="/contacts"
          >お問い合わせ
          <p class="nav-text-sub">CONTACT US</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
}
.nav {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: center;
  padding: 8%;
  background: var(--background-color);
  overflow: hidden;
  &-text {
    z-index: 2;
    font-weight: 600;
    font-size: 1rem;
    text-align: center;
    letter-spacing: 0.06rem;
    &-sub {
      font-family: var(--josefin-sans);
      font-size: 0.8rem;
      font-weight: 600;
      color: #5f8934;
      letter-spacing: 0.08rem;
      margin-top: 0.3rem;
    }
  }
  .shape-upper-left {
    position: absolute;
    top: -10%;
    left: -10%;
    width: 300px;
    height: 300px;
    border-radius: 50vh;
    background: #f4eed8;
  }
  .shape-bottom-right {
    position: absolute;
    bottom: -20%;
    right: -10%;
    width: 300px;
    height: 300px;
    border-radius: 50vh;
    background: #f4eed8;
  }
}
</style>
