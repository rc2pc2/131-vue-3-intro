// ! const createApp = Vue.createApp; 
const { createApp } = Vue;
// console.log(this);

createApp({
    data() {
        return {
            message: '',
            counter: 5,
            imageUrl: '',
            shoppingList: [
            ],
        }
    },

    methods:{
        sayGoodmorning(){
            console.log("Buongiorno!");
        },
        increaseCounter(){
            this.sayGoodmorning();
            this.counter++;
            console.log(this.counter);
        }
    }
}).mount('#app');

