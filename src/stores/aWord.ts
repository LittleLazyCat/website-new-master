import { defineStore } from "pinia";
import { ref } from "vue";

export const useAWordStore = defineStore("aWord", () => {
  const aWord = ref("1111");

  return { aWord };
});
