<script>

import { RouterLink, RouterView } from 'vue-router';
import Basket from './views/Basket.vue';
// import BasketIcon from './assets/Image/basketIcon.svg';

export default {
  data() {
    return {
      basketArr: []
    };
  },
  methods: {
    basketProduct(item) {
      if (this.basketArr.length >= 4) {
        alert("Joy toldi");
      } else {
        this.basketArr.push(item);
      }
    }
  },
  components: { Basket }
}

</script>

<template>
  <header>
    <div class="container">
      <nav class="navbar">
        <RouterLink class="nav_link" to="/">Home</RouterLink>
        <RouterLink class="nav_link" to="/basket">
          Basket
          <!-- <img class="basket_picture" :src='BasketIcon' alt="icon"> -->
          <span class="countBas">{{ basketArr.length }}</span>
        </RouterLink>
      </nav>
    </div>
  </header>
  <div class="prod_body">
    <div class="container">
      <RouterView @basketProduct="basketProduct" :basketArr="basketArr" />
    </div>
  </div>
</template>

<style scoped>
.countBas {
  width: 25px;
  height: 25px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: red;
  position: absolute;
  top: 10px;
  /* right: 0; */
  left: 61.5%;
}

.navbar {
  width: 100%;
  background-color: rgb(84, 84, 84);
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.nav_link {
  color: #fff;
  font-size: 20px;
}

.basket_picture {
  width: 20px;
  height: 20px;
  position: relative;
}
</style>
