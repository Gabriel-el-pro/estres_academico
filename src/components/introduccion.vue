<template>

    <div>
        <v-container  >
            <div class="container" >
              <template>
                <v-carousel hide-delimiters
                style="width:800px"
                 >
                  <v-carousel-item
                   
                    cover
                  >
        
       <div class="v-card v-sheet theme--light"  style="width: 810px; "  >
        <div  class="v-card__title headline " >
        <h1 style="margin-left:20px;color:white">¿Qué es el estrés académico?</h1>
         
          </div>
          <hr  class="v-divider theme--light">
          <div  class="v-card__text">
        
        <div  class="layout column wrap align-center justify-center" style="position: relative; top: 30 px; left: 110px;   ">
        <div  >
        <iframe frameborder="0"
         allowfullscreen="1" 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
         title="YouTube video player" width="515" height="350"
        src="https://www.youtube.com/embed/nOSkHi8O8OY"
       
          >
          </iframe>
          </div>
          <font style=" text-align: center;
  color: black;
  background-color: #33BEFF;font-weight: bold;">Video recuperado de <a href="https://www.youtube.com/watch?v=nOSkHi8O8OY" target="_blank">https://www.youtube.com/watch?v=nOSkHi8O8OY</a></font>
        </div>
          </div>
        </div>

        
      </v-carousel-item>


      <v-carousel-item
                   
      cover
    >

<div class="v-cardtre v-sheet theme--light"  style="width: 810px; "  >
<div  class="v-card__title headline " >
<h1 class="h1">Tipos de estrés</h1>

</div>
<hr  class="v-divider theme--light">
<div  class="v-card__text">
  <v-row>
    <v-col cols="4">
  <div class="yo">
    <a>  <div class="keti"  @click="pato1(1)">Estrés de rutina</div></a>
       <a><div class="keti" @click="pato2(2)">Estrés por cambios repentinos y difíciles</div></a>
      <a> <div class="keti" @click="pato3(3)">Estrés traumático </div></a>
  </div>
</v-col>
<v-col cols="4">
  <div class="lineas">
  <svg height="300" width="400" >
    <line  v-if="lineas==1"  x1="0" y1="70" x2="120" y2="70" style="stroke:white;stroke-width:10" />
    <line  v-if="lineas2==2" x1="0" y1="165" x2="120" y2="165" style="stroke:black;stroke-width:10" />
    <line  v-if="lineas3==3" x1="0" y1="290" x2="120" y2="290" style="stroke:rgb(244, 114, 0);stroke-width:10" />
  </svg></div>
    </v-col>
     <v-col cols="4">
     <div class="tu">
      <a v-if="cuadro==1">  <div  class="cosa" >Esto es debido a las demandas del trabajo, la escuela, las necesidades familiares, los problemas económicos y otras presiones diarias.  </div></a>
      <a v-if="cuadro22==2">    <div class="cosa" >Tenemos el divorcio, enfermedad, perdida de trabajo u otros acontecimientos poco felices que a menudo tienen un impacto prolongado.  </div></a>
      <a v-if="cuadro33==3">  <div class="cosa" >Este ocurre cuando sufre un daño grave o la muerte. Como por ejemplo un accidente grave, una guerra, un terremoto u otro evento aterrador. Este tipo de estrés puede causar un problema a largo plazo llamado trastorno postraumático. </div></a>
 
   </div></v-col>
  </v-row>
</div>
</div>


</v-carousel-item>


      <v-carousel-item
                   
      cover
    >

<div class="v-cardse v-sheet theme--light"  style="width: 810px; "  >
<div  class="v-card__title headline " >
<h2 style="margin-left:20px;color:white">consecuencias del estrés académico</h2>

</div>
<hr  class="v-divider theme--light">
<div  class="v-card__text">

<div  class="layout column wrap align-center justify-center" style="position: relative; top: 30 px; left: 110px;   ">
<div  >
<iframe frameborder="0"
allowfullscreen="1" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
title="YouTube video player" width="515" height="350"
src="https://www.youtube.com/embed/Aydb_cWXbjc"

>
</iframe>
</div>
<font style=" text-align: center;
color: black;
background-color: #33BEFF;font-weight: bold;">Video recuperado de <a href="https://www.youtube.com/watch?v=Aydb_cWXbjc" target="_blank">https://www.youtube.com/watch?v=Aydb_cWXbjc</a></font>
</div>
</div>
</div>


</v-carousel-item>
    </v-carousel>
  </template>

            </div>
       
           
        
        </v-container>
    </div>
    
</template>
<script>
export default {
    name:"App",
    data: () =>({
     cuadro:0,
     cuadro22:0,
     cuadro33:0,
     lineas:0,
     lineas2:0,
     lineas3:0,
    }),
    methods:{
      pato1(p){
        this.lineas=p
        setTimeout(this.cuadro1,1000);
        
      },
      pato2(p){
        this.lineas2=p
        setTimeout(this.cuadro2,1000);
      },
      pato3(p){
        this.lineas3=p
        setTimeout(this.cuadro3,1000);
      },
      cuadro1(){
        this.cuadro=1
      },
      cuadro2(){
        this.cuadro22=2
      },
      cuadro3(){
        this.cuadro33=3
      },
    }
}
</script>
<style scoped>
.headline{
text-align: center;
color: rgb(0, 0, 0);
text-shadow: 0px 2px 2px rgba(0, 0, 0, .2);
align-content: center;
font-size: 20px;



}
h2{
    text-align: center;
    color: rgb(25, 187, 187);
    text-shadow: 0px 2px 2px rgba(0, 0, 0, .2);
   align-content: center;
}
.v-card{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
    background: url(../../public/tarjeta.jpg) ;
  
  background-size: cover;
 
}
.v-cardse{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
    background: url(../../public/otratarjeta.jpg) ;
  
  background-size: cover;
 
}
.v-cardtre{
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
    background: url(../../public/tarjetatre.jpg) ;
  
  background-size: cover;
 
}
.v-card:hover {
  box-shadow: 0 16px 32px 0 rgba(0,0,0,0.2);
}
iframe {
  margin-top:-12px;
    border-radius: 30px ;
}
.yo{
  margin-left: 40px;
max-width: 300px;
height:370px;
}
.keti{
  color:black;
  padding: 10px;
  font-size:25px;
  width: 160px;
  max-height:120px;
  border-radius:20px;
  margin-top:30px;
  background-color: rgb(225, 106, 106);
}
.cosa{
  font-size:20px;
  padding: 5px;
          width: 400px;
          max-height:160px;
          border-radius:20px;
          margin-top:10px;
          color:black;
          background-color: rgb(246, 159, 109);
      }
      .tu{
        margin-right: 40px;
       max-width: 400px;
       height:370px;
           }

.lineas{
  margin-left: -60px;
  height:370px;
}
.h1{
  margin-left:20px;
  color:rgb(244, 114, 0);
  text-shadow: 0  2px 0 rgb(1, 1, 1),
               0  4px 0 rgb(0, 0, 0),
               0  6px 0 rgb(0, 0, 0);
}
</style>


