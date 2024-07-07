<template>
  <div>
    <article class="article__citation container__small">
      <div>
        <img src="/icon/Citation.svg" alt="Citation" />
      </div>
      <div>
        <h3 :citation="citation">{{ citation }}</h3>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CitationComponent',
  props: ['citation']
}
</script>

<style scoped>
.article__citation {
  margin-top: 35px;
  margin-bottom: 27px;
  border-radius: 50px;
  padding: 53px 53px;
  width: 799px;
  height: 267px;
  background: #f4f0ec;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.article__citation h3 {
  font-family: 'DM Serif Display', sans-serif;
  font-style: italic;
  font-size: 25px;
  letter-spacing: 0.02em;
  color: #cda274;
}
</style>
