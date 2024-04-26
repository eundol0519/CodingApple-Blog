<template>
  <div class="list">
    <div :key="i" v-for="(item, i) in list">
      <h5>{{ item.title }}</h5>
      <p class="date">{{ item.date }}</p>
      <p>{{ item.content }}</p>
      <hr />
    </div>
  </div>
</template>

<script>
import { writingList } from "@/constants/writingList";

export default {
  name: "List",
  data() {
    return {
      list: writingList,
    };
  },
};
</script>

<style>
.list {
  margin: 50px 0;
}

.list h5 {
  font-weight: 700;
}

.list .date {
  color: darkgray;
}

.list hr {
  border-color: #e1e1e1;
}
</style>
