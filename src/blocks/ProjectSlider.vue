<template>
  <section class="slider__section container">
    <div class="slider">
      <div class="slider__img" v-for="(slide, index) in slides" :key="index">
        <img
          v-show="slide.isActive"
          :class="{ zoom: isZoomed }"
          :src="slide.imgUrl"
          :alt="slide.imgAlt"
          @click="imgActive"
        />
      </div>
      <button class="slider__img__btn" :class="{ hidden: isHidden }" @click="imgActive"></button>
    </div>
    <div class="slider__pagination">
      <button class="slider__btn" @click="prevSlide($event)"></button>
      <button class="slider__btn"></button>
      <button class="slider__btn" @click="nextSlide($event)"></button>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProjectSlider',
  data() {
    return {
      isHidden: false,
      isZoomed: false
    }
  },
  computed: {
    ...mapState(['slides']),
    activeSlide() {
      return this.slides.find((slide) => slide.isActive)
    }
  },
  methods: {
    imgActive() {
      this.isHidden = !this.isHidden
      this.isZoomed = !this.isZoomed
    },
    prevSlide(event) {
      event.stopPropagation()
      const lastSlideIndex = this.slides.length - 1
      const currentSlideIndex = this.slides.findIndex((slide) => slide.isActive)
      const prevSlideIndex = currentSlideIndex === 0 ? lastSlideIndex : currentSlideIndex - 1

      this.slides[currentSlideIndex].isActive = false
      this.slides[prevSlideIndex].isActive = true
    },
    nextSlide(event) {
      event.stopPropagation()
      const lastSlideIndex = this.slides.length - 1
      const currentSlideIndex = this.slides.findIndex((slide) => slide.isActive)
      const nextSlideIndex = currentSlideIndex === lastSlideIndex ? 0 : currentSlideIndex + 1

      this.slides[currentSlideIndex].isActive = false
      this.slides[nextSlideIndex].isActive = true
    }
  }
}
</script>

<style scoped>
.slider__section {
  margin-top: 103px;
  margin-bottom: 200px;
}
.slider {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.slider img {
  border-radius: 62px;
  width: 100%;
  height: 800px;
  object-fit: cover;
  transition: all 1s;
}
.zoom {
  height: 100%;
  transform: scale(1.5);
}
.slider__img .zoom {
  border-radius: 10px;
}
.slider__img__btn {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: #fff;
  background-color: #fff;
  height: 130px;
  width: 130px;
  border-radius: 50%;
  transition: all 0.3s;
}
.slider__img__btn:hover {
  transform: scale(1.05);
}
.hidden {
  display: none;
}
.slider__img__btn::after {
  content: url('/icon/Zoom_Icon.svg');
  width: 37px;
  height: 37px;
  transition: all 0.3s;
}
.slider__img__btn::after:hover {
  transform: scale(1.05);
}
.slider__pagination {
  margin-top: 20px;
  display: flex;
  place-content: center;
  gap: 10px;
}
.slider__btn {
  cursor: pointer;
  border: 2px solid black;
  background-color: #fff;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  transition: all 0.3s;
}
.slider__btn:hover {
  background-color: #292f36;
}
</style>
