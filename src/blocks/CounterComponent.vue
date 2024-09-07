<template>
  <section class="section__counters center">
    <div class="counters__number border">
      <h3>12</h3>
      <p>Лет опыта</p>
    </div>
    <div class="counters__number border">
      <h3>85</h3>
      <p>Успешных проектов</p>
    </div>
    <div class="counters__number border">
      <h3>15</h3>
      <p>Проектов в работе</p>
    </div>
    <div class="counters__number">
      <h3>95</h3>
      <p>Счастливых клиентов</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CounterComponent'
}
</script>

<style scoped>
.section__counters {
  margin-top: 96px;
  padding-top: 151px;
  padding-bottom: 151px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #f4f0ec;
}
.counters__number {
  display: flex;
  flex-direction: column;
}
.border {
  border-right: 1px solid #cda274;
  padding-right: 65px;
}
.counters__number h3 {
  font-family: var(--font-DM);
  font-size: 85px;
  letter-spacing: 0.02em;
  color: #cda274;
}
.counters__number p {
  margin-top: 16px;
  line-height: 150%;
  color: #4d5053;
}
</style>
