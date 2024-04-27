<template>
  <h1>블로그 글 상세</h1>
  <div class="mt-5">
    <h5>{{ detail.title }}</h5>
    <p>{{ detail.date }}</p>
    <p>{{ detail.content }}</p>
  </div>

  <button @click="$router.back()">뒤로 가기</button>

  <router-view />
</template>

<script>
import { writingList } from "@/constants/writingList";

export default {
  name: "Detail",
  data() {
    return {
      detail: {},
    };
  },
  mounted() {
    const id = this.$route.params.id;

    if (writingList[id]) {
      this.detail = writingList[id];
    } else {
      this.detail = { title: "데이터가 존재하지 않습니다." };
    }
  },
};
</script>

<style></style>
