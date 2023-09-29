<script>
export default {
  props: {
    basketArr: {
      type: Object,
      requared: true
    }
  },
  
}
</script>
<template>
  <div class="basket">
    <div class="container">
      <div class="basket_box">
        <div class="bsproducts" v-for="(info, i) in basketArr" :key="info.id">
          <div class="bsimg_box">
            <img :src="info?.image" alt="Image">
          </div>
          <h3 class="bsproduct_title">{{ info?.title }}</h3>
          <button @click="handleBy" class="bsproduct_btn">Buyurtma berish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.basket_box {
  height: 700px;
  padding: 30px 20px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  /* overflow: auto; */
}

.bsproducts {
  width: 272px;
  background-color: #ffffff;
  padding: 20px 10px;
  box-sizing: border-box;
}

.bsimg_box {
  width: 100%;
  height: 200px;
}

.bsimg_box > img {
  width: 100%;
  height: 100%;
} 

.bsproduct_title {
  font-size: 19px;
  margin-bottom: 15px;
}

.bsproduct_btn {
  width: 100%;
  height: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #00425a;
  border: 1px solid #00425a;
  cursor: pointer;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.353);
  color: #c5da4b4c;
  color: #e3ffd3;
}

</style>
