<template>
    <Layout>
        <slot>
            <div class="row text-center mx-0">
                <div class="add__card_form shadow">
                <h5>Add Card</h5>
                <form @submit.prevent="handleSubmit"  class="mx-auto" style='width: 400px;'>
                <div class="form-group row mx-0">
                    <label for="cardType" class="col-sm-6 col-form-label">Card Type</label>
                    <select v-model="cardType" id="cardType" class="form-control col-sm-6">
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                    </select>
                    <label for="cardName" class="col-sm-6 col-form-label ">Card Name</label>
                    <div class="col-sm-6">
                        <input type="text" class="form-control" id="cardName" v-model="cardName">
                    </div>
                    <label for="cardCurrency" class="col-sm-6 col-form-label">Card Currency</label>
                    <select v-model="cardCurrency" id="cardCurrency" class="col-sm-6 form-control">
                        <option value="debit">Debit Card</option>
                        <option value="credit">Credit Card</option>
                    </select>
                    <label for="cardBalance" class="col-sm-6 col-form-label">Balance</label>
                    <div class="col-sm-6">
                        <input type="number" class="form-control" id="cardBalance" v-model="cardBalance">
                    </div>
                </div>
                <button class="btn btn-info">Add Card</button>
                </form>
                </div>
            </div>
        </slot>
    </Layout>
</template>

<script>
import Layout from './Layout'

export default {
  name: 'AddCard',
  components: {Layout},
  data () {
      return {
          cardType: '',
          cardName: '',
          cardCurrency: '',
          cardBalance: ''
      }
  },
  methods: {
      handleSubmit() {
          const card = {
              name: this.cardName,
              type: this.cardType,
              currency: this.cardCurrency,
              balance: this.cardBalance
          }
          this.$store.dispatch('addCard', card)
          alert('Card Added')
      }
  }
}
</script>

<style scoped>
.col-sm-6 {
    margin-bottom: 10px;
    padding: 0
}
.row {
    height: 100%;
    align-items: center;
    justify-content: center
}
.add__card_form {
    width: 450px;
    padding: 10px 20px;
    background-color: #f8f8f8
}
</style>