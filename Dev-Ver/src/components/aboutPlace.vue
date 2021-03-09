<template>
  <div>
    <div class="myBody">
      <div v-for="desc in getDescriptions" :key="desc.id" id="explain">
        <div class="card mt-5">
          <div class="cardHeader">
            <p class="title">{{desc.title}}</p>
          </div>
          <div class="cardBody">
            <p class="explain">{{desc.explain}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "aboutPlace",
  methods: {
    ...mapActions(["fetchDescriptions"])
  },
  computed: {
    ...mapGetters(["getDescriptions"])
  },
  created() {
    this.fetchDescriptions();
  }
};
</script>

<style scoped>
.myBody {
  margin-top: 1000px;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  border-top: 5px solid black;
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
.title {
  color: #fff;
  padding-right: 20px;
  font-size: 24px;
}
.card {
  width: 70%;
  margin: auto;
  box-shadow: 10px 10px 10px black;
  border-bottom: 5px solid #3282b8;
  border-left: 5px solid #3282b8;
  border-right: 5px solid #3282b8;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 35px;
}
.cardHeader {
  background: #3282b8;
  padding-top: 10px;
  padding-bottom: 10px;
  border-top-left-radius: 30px;
}
.cardBody {
  background: #bbe1fa;
  padding-top: 60px;
  padding-bottom: 60px;
  padding-left: 20px;
  padding-right: 20px;
  border-bottom-right-radius: 20px;
}
.explain {
  font-size: 20px;
  text-align: justify;
  text-justify: inter-word;
}



@media only screen and (max-width: 576px) {
  .explain {
    padding-left: 20px;
    padding-right: 20px;
  }
  .card{
    width: 90%;
  }
}
</style>