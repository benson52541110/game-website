<template>
    <div>
        <div class="section mt-5 mb-5">
              <div class="section-row">
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                  <h4 class="card-title text-left"><i class="material-icons">2020/12/09<span class="float-right">觀看數:653</span></i></h4>
                <img src="../../assets/product-image/Little Nightmares 2.jpg" alt="Photo of sunset">
                    <h5 class="card-title mt-3 mb-3">小小夢魘2 Little Nightmares 2</h5>
                    <p class="card-text">是由Tarsier Studios開發、萬代南夢宮娛樂發行的益智-平台遊戲。遊戲於2021年2月發行，對應Microsoft Windows、Stadia、任天堂Switch、PlayStation 4和Xbox One；並預定於年內推出PlayStation 5和Xbox Series X/S版[1]。遊戲為《小小夢魘》的續作。該作中玩家扮演小男孩摩諾，和電腦控制的前作主角小六協作求生，並揭開黑暗的祕密</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                    <h4 class="card-title text-left"><i class="material-icons">2017/09/06<span class="float-right">觀看數:1264</span></i></h4>
                    <img src="../../assets/product-image/Destiny 2.jpg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">天命2 Destiny 2</h5>
                    <p class="card-text">該遊戲以玩家對環境（PvE）及玩家對戰（PvP）為主。玩家對環境下，有諸如迷宮探索（遊戲中分為兩種，地牢與「突擊任務」，三人組隊）、掠奪任務（六人組隊，通常由複雜的地圖和遊戲機制組成）等遊戲模式。</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                    <h4 class="card-title text-left"><i class="material-icons">2020/09/17<span class="float-right">觀看數:1789</span></i></h4>
                    <img src="../../assets/product-image/Cyberpunk 2077.jpg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">《電馭叛客2077》</h5>
                    <p class="card-text">《電馭叛客2077》是一款由CD Projekt開發並於2020年12月10日發行的動作角色扮演遊戲。本作採用了桌上遊戲《電馭叛客2020》的世界觀與規則設計，背景為2077年美國加利福尼亞州的「賽博龐克」風格反烏托邦式城市「夜城」，玩家在這一開放世界中扮演名為「V」的僱傭兵</p> 
              </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="card">
                    <h4 class="card-title text-left"><i class="material-icons">2014/11/18<span class="float-right">觀看數:1354</span></i></h4>
                    <img src="../../assets/product-image/Watch Dogs.jpg" alt="Photo of sunset">
                    <h5 class="card-title  mt-3 mb-3">看門狗 Watch Dogs</h5>
                    <p class="card-text">遊戲的場景是一個虛構的芝加哥市，而玩家在單機模式中所扮演的主角是一位名叫艾登·皮爾斯（Aiden Pearce）的電腦駭客；他的姪女在一場蓄意陷害的車禍中喪生，而艾登則在悲痛與憤恨之際，試圖找出真相並尋求報復。</p> 
              </div>
                </div>    
              </div>
              
            </div>
            
    </div>
</template>

<script>
  export default{
    data(){
      return{
        
      }
    }
  }
</script>

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
  margin: 0 3px;
}
.card-title{  
  font-size:15px;
  transition:1s;
  cursor:pointer;
  padding: 5px;
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
  overflow: hidden;
  text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 4;
-webkit-box-orient: vertical;
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