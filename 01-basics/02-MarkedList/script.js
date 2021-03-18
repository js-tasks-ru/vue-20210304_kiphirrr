import Vue from './vendor/vue.esm.browser.js';

const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
];

 const app = new Vue({
   data() {
     return {
       emails,
       search: ""
     };
   },

   computed: {
     markedEmails() {
        if (!this.emails) {
          return null;
        }

        let markedEmailsList = [];

        const searchFilter = (email) =>
          this.search != "" ? email.toLowerCase().includes(this.search.toLowerCase()) : false;

        this.emails.forEach(
         email => markedEmailsList.push({
           email: email,
           marked: searchFilter(email)
         })
        );

        return markedEmailsList;
     }
   },

   watch: {
     search: {
        handler() {

        }
     }
   }
 });

 app.$mount("#app");
