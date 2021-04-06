<template>
    <div>
        <div class="section mt-5">
              <div class="section-row">
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                  <h4 class="card-title text-right"><i class="material-icons">遊戲日期</i></h4>
                <img src="https://static.pexels.com/photos/7096/people-woman-coffee-meeting.jpg" alt="Photo of sunset">
                    <h5 class="card-title mt-3 mb-3">遊戲標題</h5>
                    <p class="card-text">遊戲介紹</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                  <h4 class="card-title text-right"><i class="material-icons">遊戲日期</i></h4>
                <img src="https://static.pexels.com/photos/7357/startup-photos.jpg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">遊戲標題</h5>
                    <p class="card-text">遊戲介紹</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                  <h4 class="card-title text-right"><i class="material-icons">遊戲日期</i></h4>
                <img src="https://static.pexels.com/photos/262550/pexels-photo-262550.jpeg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">遊戲標題</h5>
                    <p class="card-text">遊戲介紹</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                  <h4 class="card-title text-right"><i class="material-icons">遊戲日期</i></h4>
                <img src="https://static.pexels.com/photos/326424/pexels-photo-326424.jpeg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">遊戲標題</h5>
                    <p class="card-text">遊戲介紹</p> 
              </div>
                </div>    
              </div>
              
            </div>
            
    </div>
</template>

<style scoped>
    img{
  height:150px;
  width:100%;
}

.section{
    width:100%;
    display: flex;
    justify-content: center;
}

.section-row{
  width: 70%;
  display: flex;
}

div [class^="col-"]{
  padding-left:5px;
  padding-right:5px;
}
.card{
  transition:0.5s;
  cursor:pointer;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
}
.card-title i{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  color:#ffa710
}
.card-title i:hover{
  transform: scale(1.25) rotate(100deg); 
  color:#18d4ca;
  
}
.card:hover{
  transform: scale(1.05);
  box-shadow: 10px 10px 15px rgba(0,0,0,0.3);
}
.card-text{
  height:80px;  
}

.card::before, .card::after {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transform: scale3d(0, 0, 1);
  transition: transform .3s ease-out 0s;
  background: rgba(255, 255, 255, 0.1);
  content: '';
  pointer-events: none;
}
.card::before {
  transform-origin: left top;
}
.card::after {
  transform-origin: right bottom;
}
.card:hover::before, .card:hover::after, .card:focus::before, .card:focus::after {
  transform: scale3d(1, 1, 1);
}
</style>