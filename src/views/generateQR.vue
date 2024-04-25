<template>
  <div style="display: flex; flex-direction: column; gap: 2rem;">
    <qrcode-vue :value="value" :size="size" level="H" />
    <input type="text" v-model="value"/>
  </div>
</template>
<script>
import QrcodeVue from "qrcode.vue";

export default {
  data() {
    return {
      value: "https://example.com",
      size: 300,
    };
  },
  components: {
    QrcodeVue,
  },
};
</script>