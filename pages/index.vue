<template>
  <v-app>
    <v-main width="90vw" class="mx-auto">
      <v-container fluid>
        <!-- 頂部橫幅 -->
        <v-img src="https://dummyimage.com/1366X768/fffb00/0011ff.jpg&text=owob" height="300" cover class="banner">
          <div class="banner__content">
            <div class="banner__icons">
              <v-btn v-for="icon in icons" :key="icon" icon variant="plain" class="banner__icon-btn">
                <v-icon :icon="icon" color="white" />
              </v-btn>
            </div>
            <h1 class="banner__title text-h3 font-weight-bold">
              遠翔通訊事業有限公司
            </h1>
          </div>
        </v-img>

        <!-- 搜尋欄 -->
        <br /><br />
        <v-row justify="center">
          <v-col cols="12" sm="8" md="6">
            <v-text-field label="搜尋產品" variant="outlined" prepend-inner-icon="mdi-magnify" clearable></v-text-field>
          </v-col>
        </v-row>
        <!-- 商品頁面 -->
        <v-row>
          <v-col v-for="n in 12" :key="n" cols="8" md="3">
            <v-card>
              <v-img src="https://dummyimage.com/200X250/00fbff/000000.jpg&text=瑞典肉丸" height="280" cover></v-img>
              <v-card-title>產品名稱</v-card-title>
              <v-card-text>
                <v-chip color="green" text-color="white">價格 ${{ 100 + n * 10 }}</v-chip>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <!-- 按鈕 -->
        <v-row justify="center" class="mt-6">
          <v-col cols="12" sm="6" md="4">
            <v-btn block color="green" variant="elevated">
              查看更多商品
            </v-btn>
          </v-col>
        </v-row>

        <!-- 其他內容 -->
        <v-row justify="center" class="mt-6">
          <v-col cols="12" md="4">
            <v-divider class="my-4"></v-divider>
            <p>聯絡地址：桃園市中壢區中山東路一段137號</p>
            <p>連絡電話：(03)427-1111</p>
            <p>營業時間：週一至週六9:00am-8:30pm</p>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const icons = [
  'mdi-facebook',
  'mdi-account',
  'mdi-cart'
]
</script>

<style scoped>
.banner {
  position: relative;
}

.banner__content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner__icons {
  position: absolute;
  top: 20px;
  right: 20px;
}

.banner__icon-btn {
  margin-left: 8px;
}

.banner__icon-btn::before {
  display: none;
}

.banner__title {
  margin-top: 7vh;
  color: black;
}
</style>