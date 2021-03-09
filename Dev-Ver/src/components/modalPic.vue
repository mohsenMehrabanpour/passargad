<template>
  <div>
    <button id="myBtn" @click="openModal(myID)" :style="color">
      <i class="material-icons" style="font-size:22px">fullscreen</i>
    </button>
    <div :id="'myModal'+myID" class="modal">
      <div class="modal-content">
        <span class="close" @click="closeModal(myID)">&times;</span>
        <div class="control">
          <i class="material-icons mx-5 pointer" style="font-size:40px" @click="zoomIn(myID)">zoom_in</i>
          <i class="material-icons pointer" style="font-size:40px" @click="zoomOut(myID)">zoom_out</i>
        </div>
        <div class="img-con">
          <img :src="myUrl" width="100%" :id="'pic'+myID" class />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "modalPic",
  props: ["myUrl", "myID","color"],
  methods: {
    openModal(myID) {
      document.getElementById("myModal" + myID).style.display = "block";
    },
    closeModal(myID) {
      document.getElementById("myModal" + myID).style.display = "none";
    },
    zoomIn(myID) {
      document.getElementById("pic" + myID).className = "zoom";
    },
    zoomOut(myID) {
      document.getElementById("pic" + myID).className = "";
    },
  },
};
</script>

<style scoped>
.modal {
  display: none; 
  position: fixed; 
  z-index: 1; 
  padding-top: 0px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%; 
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
.modal-content {
  background-color: #fefefe;
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
}
.close {
  color: #aaaaaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
}
.close:hover,
.close:focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
#myBtn{
   width: 100%;
   cursor: pointer;
}
.pointer{
    cursor: pointer;
}
.zoom {
  transform: scale(1.5, 1.5);
}
.img-con {
  overflow: auto;
}
.control{
    text-align: center;
}
</style>