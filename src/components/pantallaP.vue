<template>
<div  class="fondo">
  <div class="container">
 
    <div class="text-center d-flex align-center justify-space-around">
         <div >

<img src="../../public/doctor.png"  width="110" height="80">
<h2 class="display-1 mr-3 ">ESTRÉS ACADÉMICO</h2>
<hr>
</div>
    <v-tooltip  bottom  color="blue darken-1">
      <template v-slot:activator="{ on, attrs }" >
      <v-btn
          fab
          
          v-bind="attrs"
          v-on="on"
          
        >
       <router-link to="/">
        <img src="../../public/hospital.png" width="95"  height="70" class="animation" >
        </router-link>
        </v-btn>
      </template>
      <span  >Inicio</span>
      
      
      
    </v-tooltip>
    
     <v-tooltip bottom color="yellow darken-2">
      <template v-slot:activator="{ on, attrs }">
      <v-btn
          fab
          v-bind="attrs"
          v-on="on"
          
        >
        <router-link to="/introduccion">
        <img  src="../../public/prescripcion.png" width="70" class="animation">
        </router-link>
        </v-btn>
      </template>
      <span>Contenido</span>
    </v-tooltip>
     <v-tooltip bottom color="#184D5F">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          v-bind="attrs"
          v-on="on"
          
        >
        <router-link to="/actividad">
        <img src="../../public/actividad.png" width="100" class="animation">
       </router-link>
        </v-btn>
      </template>
      <span>Actividades</span>
    </v-tooltip>
     <v-tooltip bottom color="rgb(112, 103, 3)">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          v-bind="attrs"
          v-on="on"
         
        >
        <router-link to="/evaluacion">
        <img  src="../../public/tarea.png" width="80"  class="animation">
        </router-link>
        </v-btn>
      </template>
      <span>Evaluación</span>
    </v-tooltip>
     <v-tooltip bottom >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          fab
          v-bind="attrs"
          v-on="on"
          
        >
        <router-link to="/creditos">
        <img src="../../public/informacion.png" width="90" class="animation">
        </router-link>
        </v-btn>
      </template>
      <span>Acerca de </span>
    </v-tooltip>

  </div>
  </div>
  <v-col align="center" justify="center">
        <router-view></router-view>
    </v-col>
 
  </div>
  
   
    
    

</template>
<script>
export default {
    name:"App",
    data: () =>({
     pantalla:1,
    }),
}
</script>
<style scoped>
@media (max-width:500px) {
  .fondo{
    transform: rotate(90deg);
   
    width: 1020px;
    margin: 100px;
      background: url(../../public/imagen.jpg) ;
      background-repeat: no-repeat;
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: cover;
   }
  }
@media (min-width: 510px) {
.fondo{
    background: url(../../public/imagen.jpg);
    height: 100%;
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
 }
}
 h2{
  font: bold 80px/1 arial;
  text-transform: uppercase;
  color: rgb(176, 108, 6);
  text-shadow: 0  2px 0 rgb(68, 58, 30),
               0  4px 0 rgb(139, 109, 44),
               0  6px 0 rgb(151, 126, 56);
              
 }
.animation{
   animation-name: boton;
   animation-duration: .8s;
   animation-timing-function: linear;
   animation-iteration-count: infinite;
   animation-direction: alternate;
 }
 @-webkit-keyframes boton{0%{transform:scale(1);}to{transform: scale(1.1);}}
@keyframes boton{0%{transform:scale(1);}to{transform: scale(1.1);}}
hr {border-radius: 10px; width: 330%; height: 20px; box-shadow: inset 0 22px 12px -12px rgb(0, 0, 0); color: rgb(0, 0, 0); text-align: center;}

@media (max-width: 500px) {
 .buelta{
  transform: rotate(90deg);
 }
  hr {border-radius: 10px; width: 230%; height: 20px; box-shadow: inset 0 22px 12px -12px rgb(0, 0, 0); color: rgb(0, 0, 0); text-align: center;}
.container{
  margin-left: 80px;
  width: 790px;
}

}
</style>

