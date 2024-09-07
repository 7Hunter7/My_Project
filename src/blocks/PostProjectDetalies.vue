<template>
  <div>
    <section class="post__section container">
      <div class="post__title">
        <h2>Минималистичные спальни</h2>
      </div>
      <div class="post__about">
        <p>
          В своей статье от 1994-го года журнал «Before & After» отследил фразу «Lorem ipsum ...» до
          философского трактата Цицерона О пределах добра и зла, написанного в 45 году до нашей эры
          на латинском языке.
        </p>
        <br />
        <p>
          В оригинале текст выглядит так «Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit ...», и переводится как «Нет никого, кто любил бы свою
          боль, кто искал бы ее и хотел бы чтобы она была у него. Потому что это боль...».
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'PostProjectDetalies'
}
</script>

<style scoped>
.post__section {
  margin-top: 200px;
  width: 658px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.post__title h2 {
  font-size: 50px;
  letter-spacing: 0.02em;
  text-align: left;
}
.post__about {
  margin-top: 11px;
}
.post__about p {
  margin-bottom: 11px;
  font-family: var(--font-DM);
  line-height: 150%;
  text-align: left;
  color: #4d5053;
}
</style>
