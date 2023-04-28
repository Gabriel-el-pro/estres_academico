<template>
    <div>
        <v-container>
          <template>
            <v-carousel hide-delimiters
            
             >
              <v-carousel-item
                cover
              >
  <iframe src="https://h5p.org/h5p/embed/1381976" width="850" height="420" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Crossword"></iframe>
              </v-carousel-item>
              <v-carousel-item
                cover
              >
  <iframe src="https://h5p.org/h5p/embed/1381984" width="850" height="420" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Crossword"></iframe>
              </v-carousel-item>
              <v-carousel-item
                cover
              >
  <iframe src="https://h5p.org/h5p/embed/1381989" width="850" height="420" frameborder="0" allowfullscreen="allowfullscreen" allow="geolocation *; microphone *; camera *; midi *; encrypted-media *" title="Crossword"></iframe>
              </v-carousel-item>
              </v-carousel>
              </template>
 

        </v-container>
    </div>
</template>
<script>
  export default{
    name:"App",
    data: () => {
      return {
      r:[],
      sh:false,
      show: false,
      reveal: false,
      models: {
        base: false,
      }
    }
    },
    methods: {
      impro(){
  this.r=[];
      this.sh=false;
      this.show= false;
      this.reveal= false;
      this.models= {
        base: false,
        
      };
      },
      cambio(){
this.show=false;
this.sh=false;
      },
        onDragging(ev){
      ev.dataTransfer.setData("text", ev.target.id);
      
    },
    allowDrop(ev) {
      ev.preventDefault();
     
    },
        end(ev){
	ev.target.style.opacity = ''; 	
	ev.dataTransfer.clearData("Data");			
},
    drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    },
    drop(ev) {
     ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  if(data==2||data==3){
this.show=true;
  }else{
this.sh=true;
  }
   setTimeout(this.cambio,2000);
   this.r.push(data);
  ev.target.appendChild(document.getElementById(data)); 
  
  if(this.r.length==500){
 setTimeout(this.impro,4000);
  }
    },
    },

       } 
</script>
<style scoped>
.box-iner {
      margin: 5px;
         
         border-radius: 3px;
      display: flex;
    width:130px;
    height: 30px;
    padding: 1px;
    margin-top: 60px;
    margin-left:-300px;
  }
  .box-iner2 {
      margin: 5px;
    
         border-radius: 3px;
      display: flex;
    width:110px;
    height: 42px;
    padding: 1px;
    margin-top: 127px;
    margin-left:300px;
  }

  
.ima{
  float:left;
   
max-width: 200px;
max-height:500px;
margin-left: 80px;
}
.font{
  float:left;
  
}
.ima2{
 float:right;
max-width: 200px;
height:200px;
border:2px solid red;
}
.pelao{
 
  margin-left: auto;
  
   width: 460px;
            height: 310px;
            background-image: url("../assets/pelao.png");
            background-size: 100% 100%;
            border-radius: 5px;
            border: 2px solid black;
}
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
  
}
hr{
  height: 4px;
  background-color: black;
}
.v-btn{

          position:absolute;
         left:25%;
         top:67%;
         width:50%;
         


  
}

</style>