<template>
  <h1>블로그 글 상세</h1>
  <h5>{{ detail.title }}</h5>
  <p>{{ detail.date }}</p>
  <p>{{ detail.content }}</p>
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
    this.detail = writingList[0];
  },
};
</script>

<style></style>
