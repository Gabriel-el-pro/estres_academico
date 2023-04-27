<template>
    <div>
        <v-container>
            
<div class="v-dialog v-dialog--active" style="max-width: 480px;">
<div class="v-card v-sheet theme--light">
<div class="v-card__title  primary green accent-2 v-card__title--primary">
<h2 class="text-uppercase headline">Desarrolladores del producto.</h2>
</div>
<div class="v-card__text ">
<div role="list" class="v-list transparent theme--light">
<div role="listitem">
<div class="v-list__tile v-list__tile--avatar theme--light">
<div class="v-list__tile__content">
<div class="v-list__tile__title font-weight-bold">Juan Gabriel Salgado Bolaño.</div>
</div>
<div class="v-list__tile__avatar">
    <div class="v-avatar" style="height: 40px; width: 40px;">
    <img src="../../public/Gabriel.jpeg" @click="verArdwin()">
 </div>
 <v-dialog
            v-model="persona"
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
          >
            <v-card :img="info.avatar" width="500" height="500">
              
            </v-card>
          </v-dialog>
    </div>
     </div>
           </div>
<div role="listitem">  
<div class="v-list__tile v-list__tile--avatar theme--light">
<div class="v-list__tile__content">
<div class="v-list__tile__title  font-weight-bold">Pedro Joaquin Florez Villadiego.</div>
</div>
<div class="v-list__tile__avatar">
 <div class="v-avatar" style="height: 40px; width: 40px;">
 <img src="../../public/pedro.jpeg"  @click="verAldair()">
    </div>
    <v-dialog
            v-model="persona"
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
          >
            <v-card :img="info.avatar" width="500" height="500">
              
            </v-card>
          </v-dialog>
    </div>
    </div>
    </div>
    
<div role="listitem">
<div class="v-list__tile v-list__tile--avatar theme--light">
 <div class="v-list__tile__content">
 <div class="v-list__tile__title  font-weight-bold">Angie Argel Ortiz</div>
</div>
<div class="v-list__tile__avatar">
<div class="v-avatar" style="height: 40px; width: 40px;">
 <img src="../../public/angie.jpeg"  @click="vertatiana()">
     </div>
    
     <v-dialog
            v-model="persona"
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
          >
            <v-card :img="info.avatar" width="500" height="500">
              
            </v-card>
          </v-dialog>
    </div> 
     </div>
     </div>
     <hr class="v-divider theme--light">
     <div role="listitem" class="primary pink accent-2 mt-4">
     <div class="v-list__tile theme--light">
<div class="v-list__tile__content">
 <div style="font-weight: bold;" class="v-list__tile__title">Docente: Filadelfia Maria Hernandez Roso</div>
 </div><div class="v-list__tile__avatar">
 <div class="v-avatar" style="height: 40px; width: 40px;">
<img src="../../public/profesora.jpg" @click="verAly()">
       </div>
       <v-dialog
            v-model="persona"
            :overlay="false"
            max-width="500px"
            transition="dialog-transition"
          >
            <v-card :img="info.avatar" width="500" height="500">
              
            </v-card>
          </v-dialog>
       </div>
       </div>
       </div>
 <div class="v-list__tile__content"> 
<img src="../../public/unicor.png" class="ml-4 mt-4" width="200px" height="80px">

<h2 class="text-uppercase red">Referencias</h2>
<p class="text-uppercase blue" style="font-weight: bold;">Cogollo, J. [JorgeCogollo]. (2020, septiembre 7).  ¿Qué es un DIAGRAMA DE FLUJO?  Cómo HACER Diagramas de Flujo Paso a Paso + Ejemplos. Youtube. https://www.youtube.com/watch?v=Kucgc6NpGwc</p>


                </div>
                </div>
                </div>
                </div>
                </div>
        </v-container>
    </div>
</template>
<script>
export default {
    name:"App",
    data: () =>{
       return {
      info: {},
      dialog: false,
      persona: false
    }
    },
    methods: {

    verAly () {
      this.info = {
        nombre: 'Filadelfia Maria Hernandez Roso',
        avatar: require('../../public/profesora.jpg')
      }
      this.persona = true
    },
    verArdwin () {
      this.info = {
        nombre: 'Gabriel Salgado',
        avatar: require('../../public/Gabriel.jpeg')
      }
      this.persona = true
    },
     verAldair () {
      this.info = {
        nombre: 'Pedro Florez Villadiego',
        avatar: require('../../public/pedro.jpeg')
      }
      this.persona = true
    },
     vertatiana () {
      this.info = {
        nombre: 'Angie Argel Ortiz',
        avatar: require('../../public/angie.jpeg')
      }
      this.persona = true
    },
   
     
    
    

  },
}
</script>

 




