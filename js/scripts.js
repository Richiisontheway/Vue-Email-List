// Estraggo la funzione createApp dall'oggetto Vue
const { createApp } = Vue;

// Creo l'istanza di Vue da montare in pagina
createApp({
    data() {
        return {
        emails : [],
        message : 'Random Emails'
        };
    },
    mounted(){
        for (let index = 0; index < 10; index++) {
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) =>{
            this.emails.push(res.data.response)
        })
        }
        // console.log(this.emails)
    }
  // Monto l'istanza di Vue in pagina
}).mount("#app");