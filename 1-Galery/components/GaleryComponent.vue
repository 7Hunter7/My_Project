<template>
  <div>
    <div>
      <img class="dig__img" :src="currentImgUrl" :alt="currentImgAlt" />
    </div>
    <div>
      <img
        class="small__img"
        v-for="(img, index) in imgList"
        :key="index"
        :src="img.url"
        :alt="img.alt"
        @click="selectImgIndex(index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "GaleryComponent",
  data() {
    return {
      currentImgIndex: 0,

      imgList: [
        {
          url: "https://avatars.mds.yandex.net/i?id=1cf04a6f38f0be15415a0c35010d27a3b2bac0ff-12496338-images-thumbs&n=13",
          alt: "Wallpapers",
        },
        {
          url: "https://avatars.mds.yandex.net/i?id=017409fc1a69d562293799b116a3eab70f0366bc-12394646-images-thumbs&n=13",
          alt: "Cityscape",
        },
        {
          url: "https://avatars.mds.yandex.net/i?id=0e72934b679a07922fd2daa9314658620b56a30e-10143230-images-thumbs&n=13",
          alt: "National park",
        },
        {
          url: "https://avatars.mds.yandex.net/i?id=7072d8ce023d40f3ed7ff5bec0ddd06f06fae2bd-12884924-images-thumbs&n=13",
          alt: "Sea",
        },
        {
          url: "https://avatars.mds.yandex.net/i?id=445ba0741950817243e4378a0620e4b973a63f8d-12496338-images-thumbs&n=13",
          alt: "Summer",
        },
      ],
    };
  },
  methods: {
    selectImgIndex(index) {
      this.currentImgIndex = index;
    },
  },
  computed: {
    currentImgUrl() {
      return this.imgList[this.currentImgIndex].url;
    },
    currentImgAlt() {
      return this.imgList[this.currentImgIndex].alt;
    },
  },
};
</script>
<style>
.small__img {
  width: 100px;
}
.dig__img {
  width: 300px;
}
</style>
