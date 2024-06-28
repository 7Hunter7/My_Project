<!-- Задание 3 (тайминг 40 минут)
Вам необходимо создать компонент ипотечного калькулятора,
который позволяет пользователю вводить сумму кредита,
процентную ставку и срок кредита. Компонент должен автоматически
вычислять ежемесячный платеж и общую сумму выплаты по кредиту. -->

<!-- Задание 3 (тайминг 40 минут)
1. Создайте компонент MortgageCalculator с соответствующим шаблоном и скриптом.
2. В шаблоне компонента разместите поля ввода для суммы кредита, процентной
ставки и срока кредита, а также элементы для отображения ежемесячного платежа
и общей суммы выплаты.
3. Используйте директиву v-model для связывания введенных пользователем
значений с соответствующими свойствами в компоненте.
4. Создайте вычисляемое свойство monthlyPayment, которое будет вычислять
ежемесячный платеж на основе введенных значений суммы кредита, процентной
ставки и срока кредита.
5. Создайте вычисляемое свойство totalPayment, которое будет вычислять общую
сумму выплаты по кредиту, учитывая ежемесячный платеж и срок кредита.
6. Отобразите значения monthlyPayment и totalPayment в соответствующих элементах
шаблона. -->

<template>
  <div>
    <div class="conditions">
      <h2>Выберите условия кредитования</h2>
      <label for="loanAmount">Cуммы кредита, руб.</label>
      <input type="number" id="loanAmount" v-model.number="loanAmount" />
      <label for="interestRate">Процентная ставка, %</label>
      <input
        type="number"
        step="0.01"
        id="interestRate"
        v-model.number="interestRate"
      />
      <label for="loanTerm">Срок кредита, мес.</label>
      <input type="number" id="loanTerm" v-model.number="loanTerm" />
    </div>
    <div class="calculation">
      <h2>Рассчет кредитования</h2>
      <p>Ежемесячный платеж: {{ monthlyPayment }} руб.</p>
      <p>Общая сумма выплаты: {{ totalPayment }} руб.</p>
    </div>
  </div>
</template>

<script>
export default {
  neme: "MortgageCalculator",
  data() {
    return {
      loanAmount: 1000000,
      interestRate: 10,
      loanTerm: 120,
    };
  },
  computed: {
    monthlyPayment() {
      const rate = this.interestRate / 100 / 12;
      const term = this.loanTerm;
      const principal = this.loanAmount;
      const numerator = rate * Math.pow(1 + rate, term);
      const denominator = Math.pow(1 + rate, term) - 1;
      const payment = principal * (numerator / denominator);
      return payment.toFixed(2);
    },
    totalPayment() {
      const term = this.loanTerm;
      const payment = this.monthlyPayment;
      return (term * payment).toFixed(2);
    },
  },
};
</script>

<style>
h2 {
  margin-top: 32px;
  text-align: center;
}
.conditions {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.calculation {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
