// ! const createApp = Vue.createApp; 
const { createApp } = Vue;
// console.log(this);

createApp({
    data() {
        return {
            nome: '',
            cognome: '',
            mostraNome: false,
            userClasses: 'text-warning'
        }
    },

    methods:{
        mostraBenvenuto(){
            this.mostraNome = !this.mostraNome;
            this.userClasses = "text-success";
        }
    }
}).mount('#app');

