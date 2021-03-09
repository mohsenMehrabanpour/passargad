<template>
  <div id="gallery">
    <div class="note mt-5">
      <p class="my-2">برای دانلود و دیدن عکس در اندازه واقعی کافیست بر روی آن کلیک کنید</p>
      <p class="mb-2">
        برای بزرگ کردن عکس بر روی
        <i class="material-icons" style="font-size:22px">fullscreen</i>
        واقع در زیر عکس کلیک کنید
      </p>
    </div>
    <div v-for="(photo,index) in getPhotos" :key="photo.id">
      <div class="galleryBody1 mt-5" v-if="photo.id%2!=0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <a :href="photo.url">
                <img
                  :src="photo.url"
                  :alt="photo.title"
                  width="100%"
                  height="400px"
                  class="imgStyle"
                />
              </a>
              <modalPic :myUrl="photo.url" :myID="photo.id" color="background:#5d70bd" />
            </div>
            <div class="col-12 col-md-6">
              <p class="myTitle1">{{photo.title}}</p>
              <div class="comments1">
                <div v-for="comment in getComments" :key="comment.id">
                  <div class="commentCard mt-1" v-if="comment.photoID==photo.id">
                    <div class="commentHead">{{comment.name}} :</div>
                    <div class="commentBody">{{comment.txt}}</div>
                  </div>
                </div>
              </div>
              <div class="addComment1 mt-2">
                <input
                  class="addcm11 my-2"
                  type="text"
                  v-model="name"
                  name="name"
                  placeholder="نام"
                />
                <br />
                <input class="addcm12" type="text" v-model="txt" placeholder="نظر" />
                <button class="click" @click="setter(index)">
                  <i class="material-icons send" style="font-size:22px">send</i>
                </button>
              </div>
              <div class="rating">
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(1,index)"
                    :id="'star1'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(2,index)"
                    :id="'star2'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(3,index)"
                    :id="'star3'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(4,index)"
                    :id="'star4'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a v-for="rate in getRates" :key="rate.id">
                  <a class="rateRes" v-if="rate.id == photo.id">
                    <a>تا کنون {{rate.number}} نفر امتیاز داده اند</a>
                    <a>که میانگین امتیازات {{rate.average}} میباشد</a>
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div :id="'checkRate'+index" style="display:none">true</div>
      </div>

      <div class="galleryBody2 mt-5" v-if="photo.id%2==0">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-md-6">
              <p class="myTitle2">{{photo.title}}</p>
              <div class="comments2">
                <div v-for="comment in getComments" :key="comment.id">
                  <div class="commentCard2 mt-1" v-if="comment.photoID==photo.id">
                    <div class="commentHead2">{{comment.name}} :</div>
                    <div class="commentBody2">{{comment.txt}}</div>
                  </div>
                </div>
              </div>
              <div class="addComment1 mt-2">
                <input
                  class="addcm21 my-2"
                  type="text"
                  v-model="name"
                  name="name"
                  placeholder="نام"
                />
                <br />
                <input class="addcm22" type="text" v-model="txt" placeholder="نظر" />
                <button class="click" @click="setter(index)">
                  <i class="material-icons send2" style="font-size:22px">send</i>
                </button>
              </div>
              <div class="rating">
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(1,index)"
                    :id="'star1'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(2,index)"
                    :id="'star2'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(3,index)"
                    :id="'star3'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a class="myStars">
                  <i
                    class="material-icons myStars"
                    @click="starRate(4,index)"
                    :id="'star4'+index"
                    style="font-size:22px"
                  >star_outline</i>
                </a>
                <a v-for="rate in getRates" :key="rate.id">
                  <a class="rateRes" v-if="rate.id == photo.id">
                    <a>تا کنون {{rate.number}} نفر امتیاز داده اند</a>
                    <a>که میانگین امتیازات {{rate.average}} میباشد</a>
                  </a>
                </a>
              </div>
            </div>

            <div class="col-12 col-md-6 order-md-last order-first">
              <a :href="photo.url">
                <img
                  :src="photo.url"
                  :alt="photo.title"
                  width="100%"
                  height="400px"
                  class="imgStyle"
                />
              </a>
              <modalPic :myUrl="photo.url" :myID="photo.id" color="background:#74629b" />
            </div>
          </div>
        </div>
      </div>
      <div :id="'checkRate'+index" style="display:none">true</div>
    </div>
  </div>
</template>

<script>
import modalPic from "./modalPic";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "gallery",
  components: {
    modalPic,
  },
  computed: {
    ...mapGetters(["getPhotos", "getComments", "getRates"]),
  },
  data() {
    return {
      name: "",
      txt: "",
      photoID: "",
    };
  },
  methods: {
    ...mapActions([
      "fetchPhotos",
      "fetchComments",
      "fetchRates",
      "addComment",
      "upRate",
    ]),

    starRate(val, index) {
      if (document.getElementById("checkRate" + index).innerText == "true") {
        var id = index.toString();
        if (val == 1) {
          document.getElementById("star1" + id).innerHTML = "star";
          document.getElementById("star2" + id).innerHTML = "star_outline";
          document.getElementById("star3" + id).innerHTML = "star_outline";
          document.getElementById("star4" + id).innerHTML = "star_outline";
        }
        if (val == 2) {
          document.getElementById("star1" + id).innerHTML = "star";
          document.getElementById("star2" + id).innerHTML = "star";
          document.getElementById("star3" + id).innerHTML = "star_outline";
          document.getElementById("star4" + id).innerHTML = "star_outline";
        }
        if (val == 3) {
          document.getElementById("star1" + id).innerHTML = "star";
          document.getElementById("star2" + id).innerHTML = "star";
          document.getElementById("star3" + id).innerHTML = "star";
          document.getElementById("star4" + id).innerHTML = "star_outline";
        }
        if (val == 4) {
          document.getElementById("star1" + id).innerHTML = "star";
          document.getElementById("star2" + id).innerHTML = "star";
          document.getElementById("star3" + id).innerHTML = "star";
          document.getElementById("star4" + id).innerHTML = "star";
        }
        for (let rate in this.getRates) {
          if (this.getRates[rate].photoID == index + 1) {
            var rateID = this.getRates[rate].id;
            var count = this.getRates[rate].number + 1;
            var avg = (this.getRates[rate].average + val) / 2;
            var imgID = this.getRates[rate].photoID;
            var upRate = {
              id: rateID,
              photoID: imgID,
              number: count,
              average: avg,
            };
            this.upRate(upRate);
            document.getElementById("checkRate" + index).innerText = "false";
          }
        }
      } else {
        alert("شما امتیاز خودرا یک بار ثبت کرده اید");
      }
    },
    setter(index) {
      if (this.name == "" || this.txt == "") {
        alert("لطفا فیلد هارا پر کنید");
      } else {
        var objc = {
          txt: this.txt,
          name: this.name,
          photoID: index + 1,
        };
        this.addComment(objc);
        this.name = "";
        this.txt = "";
      }
    },
  },
  created() {
    this.fetchPhotos();
    this.fetchComments();
    this.fetchRates();
  },
};
</script>

<style scoped>
.imgStyle {
  padding-top: 10px;
  padding-bottom: 5px;
}
.myTitle1 {
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
}
.myTitle2 {
  color: #fff;
  font-size: 20px;
  margin-top: 15px;
}
.galleryBody1 {
  width: 97%;
  background: #394989;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  box-shadow: 10px 10px 10px black;
}
.galleryBody2 {
  width: 97%;
  background: #3b2e5a;
  margin-right: 3%;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  box-shadow: 10px 10px 10px black;
}
.comments1 {
  margin-top: 15px;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  background: #5d70bd;
}
.comments2 {
  margin-top: 15px;
  width: 100%;
  height: 250px;
  overflow-y: auto;
  background: #5f4e85;
}
.commentCard {
  width: 98%;
  margin: auto;
  background: #394989d5;
  border-radius: 10px;
}
.commentHead {
  color: #05dfd7;
  margin-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.commentBody {
  color: #fff;
  margin-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.commentCard2 {
  width: 98%;
  margin: auto;
  background: #3b2e5ada;
  border-radius: 10px;
}
.commentHead2 {
  color: #db5af5;
  margin-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.commentBody2 {
  color: #fff;
  margin-right: 15px;
  padding-top: 10px;
  padding-bottom: 10px;
}
.addComment1 {
  width: 100%;
  color: #fff;
}
::placeholder {
  color: #fff;
  opacity: 0.8;
  font-weight: bold;
}

:-ms-input-placeholder {
  color: #fff;
  opacity: 0.8;
  font-weight: bold;
}

::-ms-input-placeholder {
  color: #fff;
  opacity: 1;
  text-align: center;
  font-weight: bold;
}
.addcm11 {
  width: 60%;
  background: #7a8dd8;
  border-radius: 5px;
  outline: none;
  height: 20px;
  border: none;
  color: #ffffff;
}
.addcm21 {
  width: 60%;
  background: #74629b;
  border-radius: 5px;
  outline: none;
  height: 20px;
  border: none;
  color: #ffffff;
}
.addcm12 {
  width: 91%;
  background: #7f8fce;
  border-radius: 5px;
  outline: none;
  height: 20px;
  border: none;
}
.addcm22 {
  width: 91%;
  background: #74629b;
  border-radius: 5px;
  outline: none;
  height: 20px;
  border: none;
}
.send {
  transform: rotate(180deg);
  color: #05dfd7;
  cursor: pointer;
}
.send2 {
  transform: rotate(180deg);
  color: #db5af5;
  cursor: pointer;
}
.click {
  padding-top: 2px;
  padding-right: 5px;
  vertical-align: middle;
  border: none;
  background: none;
  outline: none;
}
.myStars {
  color: yellow;
  float: left;
  cursor: pointer;
  padding-top: 5px;
  padding-bottom: 5px;
}
.rateRes {
  padding-bottom: 5px;
  margin-top: 50px;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
}
.note {
  background: #5f4e85;
  width: 80%;
  margin: auto;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 20px;
  border-radius: 10px;
  border: 3px solid #db5af5;
  color: #fff;
  font-weight: bold;
}
#gallery {
  background: rgba(0, 0, 0, 0.5);
  padding-top: 10px;
  padding-bottom: 35px;
  animation-name: myBG;
  animation-duration: 2.8s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
}
@keyframes myBG {
  0% {
    background: rgba(0, 0, 0, 0.5);
  }
  12.5% {
    background: rgba(0, 0, 0, 0.55);
  }
  25% {
    background: rgba(0, 0, 0, 0.6);
  }
  37.5% {
    background: rgba(0, 0, 0, 0.65);
  }
  50% {
    background: rgba(0, 0, 0, 0.7);
  }
  62.5% {
    background: rgba(0, 0, 0, 0.65);
  }
  75% {
    background: rgba(0, 0, 0, 0.6);
  }
  87.5% {
    background: rgba(0, 0, 0, 0.55);
  }
  100% {
    background: rgba(0, 0, 0, 0.5);
  }
}
</style>