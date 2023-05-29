<template>
  <div>
    <div class="footer-main">
      <div>
        <div class="logo">
          <div class="logo-icon">
            <a href="#"><img src="/svgs/logo.svg" alt="logo" /></a>
          </div>
          <div>
            <p class="logo-text">さくらいとれとれ市場</p>
            <p class="logo-text-sub">Sakurai Toretore Market</p>
          </div>
        </div>
      </div>
      <div>
        <ul class="nav">
          <li class="nav-text">
            <a href="#">
              店舗情報
              <p class="nav-text-sub">INFOMATIN</p>
            </a>
          </li>
          <li class="nav-text">
            <a href="#"
              >取り扱い商品
              <p class="nav-text-sub">PRODUCT</p>
            </a>
          </li>
          <li class="nav-text">
            <a href="#"
              >お知らせ
              <p class="nav-text-sub">NEWS</p>
            </a>
          </li>
          <li class="nav-text">
            <a href="#"
              >出荷者募集
              <p class="nav-text-sub">SHIPPERS</p></a
            >
          </li>
          <li class="nav-text">
            <a href="#"
              >お問い合わせ
              <p class="nav-text-sub">CONTACT US</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer-sub">
      <div class="address">
        <p class="address-text">〒633-0062</p>
        <p class="address-text">奈良県桜井市大字粟殿72番地</p>
        <p class="address-map">Google map →</p>
      </div>
      <div class="shopping-cart">
        <a href="#"><img src="/svgs/shopping-cart.svg" alt="#" /></a>
      </div>
    </div>
    <div class="copyright">
      <small>
        Copyright © 2018-2023 さくらいとれとれ市場 All rights reserved.
      </small>
    </div>
  </div>
</template>

<style scoped>
.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  height: 7rem;
  font-family: var(--noto-sans);
  margin: 0 7%;
}

.logo {
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
}

.logo-icon {
  width: 7rem;
  height: 7rem;
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
  font-weight: 400;
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
  color: #5f8934;
  letter-spacing: 0.08rem;
  font-weight: 400;
}

.footer-sub {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 7%;
}

.address {
  font-size: 0.9rem;
  font-family: var(--noto-sans);
  font-weight: 400;
}

.address-text {
  padding: 0.5rem;
  font-family: var(--noto-sans);
}

.address-map {
  padding: 0.5rem;
  font-family: var(--noto-sans);
  text-decoration: underline;
}

.shopping-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: solid 1px;
  margin: 1.5rem;
}

.copyright {
  font-size: 0.9rem;
  font-family: var(--noto-sans);
  color: #bebebe;
  text-align: right;
  margin: 0 7%;
}

@media screen and (max-width: 767px) {
  .footer-main {
    display: block;
    height: auto;
  }
  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .logo-text-sub {
    text-align: center;
  }

  .nav {
    display: none;
  }

  .address {
    display: none;
  }

  .shopping-cart {
    display: none;
  }

  .copyright {
    text-align: center;
  }
}
</style>
