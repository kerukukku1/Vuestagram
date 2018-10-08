<template>
    <div>
        <p>hello</p>
        <p>{{ items[0].name }}: {{ items[0].price }} × {{ items[0].quantity }}</p>
        <p>小計: {{ totalPrice | numberWithDeliminater }}円</p>
        <p>合計（税込）: {{ totalPriceWithTax | numberWithDeliminater }}円</p>
        <p v-show="!canBuy">
            {{ 1000 | numberWithDeliminater }}円からご購入いただけます
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                items: [
                    {
                        name: '鉛筆',
                        price: 300,
                        quantity: 2
                    },
                    {
                        name: 'ノート',
                        price: 400,
                        quantity: 1
                    },
                    {
                        name: '消しゴム',
                        price: 500,
                        quantity: 2
                    }
                ]
            }
        },
        filters: {
            numberWithDeliminater: function(value){
                if (!value) {
                    return '0';
                } else {
                    return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
                }

            }
        },
        computed: {
            totalPrice: function() {
                return this.items.reduce((p,x) => p + (x.price*x.quantity), 0)
            },
            totalPriceWithTax: function() {
                return Math.floor(this.totalPrice * 1.08);
            },
            canBuy: function() {
                return this.totalPrice >= 1000;
            }
        },
        created() {
            console.log("create")
        }
    };
</script>

<style>
</style>