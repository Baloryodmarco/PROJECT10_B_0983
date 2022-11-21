<template>
    <v-main>
     <v-row>
         <v-col>
            <v-card class="mt-5 mx-6 float-left font-italic" dark max-width="290" min-width="290" v-for="item in merchandises" :key="item.price" :color = "item.color">
            <v-card-title> {{item.merchandise}} </v-card-title>
         </v-card>
         </v-col>
     </v-row>
    </v-main>
</template>
  
  <script>
  //tambahkan code untuk import database reference dan fungsi bawaan dari firebase database
  import { db } from "../firebase";
  import { ref, set, remove, get, push, onValue } from '@firebase/database';
  
  export default {
      name: "MerchandisePage",
      data () {
          return {
              merchandises: []
          }
      },
       created() {
          // tambahkan fungsi untuk retrieve data
          onValue(ref(db, 'merchandises'), (snapshot) => {
              this.merchandises = [],
              snapshot.forEach((merchandise) => {
                  this.merchandises.push({
                      id: merchandise.key,
                      merchandise: merchandise.val().merchandise,
                      artist: merchandise.val().artist,
                      price: merchandise.val().price,
                      package: merchandise.val().package,
                      stock: merchandise.val().stock,
                      color:"#"+((1<<24)*Math.random()|0).toString(16),
                    });
              })
          })
      }
  }
  </script>