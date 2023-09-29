<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          title: "Noutbook Lenovo",
          image: "https://mini-io-api.texnomart.uz/catalog/product/3557/355766/189530/17691c91-7736-4d8f-a81f-4e7fc7cf4c3a.webp"
        },
        {
          id: 2,
          title: "Iphone 14 Pro Max",
          image: "https://d2r9epyceweg5n.cloudfront.net/stores/001/097/819/products/iphone-14-pro-max1-af3429c01c0ab65d0016662805286969-1024-1024.jpg"
        },
        {
          id: 3,
          title: "Smart TV",
          image: "https://www.lg.com/in/images/tvs/md07557246/gallery/65UQ7500PSF-D-03_VF.jpg"
        },
        {
          id: 4,
          title: "Keyboar k8",
          image: "https://maxcom.uz/storage/product/s9cqIb8mEzzoyfvaPyGZ1IWv9qJnICDamBFifV9M.png"
        }
      ],
    }
  },
  methods: {
    handleBasket(n) {
      this.$emit('basketProduct', n)
    },
  },
}
</script>

<template>
  <main>
    <div class="container">
      <div class="product_box">
        <div class="products" v-for="data in products" :key="data?.id">
          <div class="img_box">
            <img :src="data?.image" alt="Image">
          </div>
          sss
          <h3 class="product_title">{{ data?.title }}</h3>
          <button @click="handleBasket(data)" class="product_btn">Qo'shish</button>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
.product_box {
  height: 700px;
  padding: 30px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.products {
  width: 272px;
  background-color: #ffffff;
  padding: 20px 10px;
  box-sizing: border-box;
}

.img_box {
  width: 100%;
  height: 200px;
}

.img_box>img {
  width: 100%;
  height: 100%;
}

.product_title {
  font-size: 19px;
  margin-bottom: 15px;
}

.product_btn {
  width: 100%;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00425a;
  border: 1px solid #00425a;
  cursor: pointer;
  font-size: 17px;
  color: #fff;
}
</style>
