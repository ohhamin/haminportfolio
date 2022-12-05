<template>
  <div class="main__container">
    <div
      v-for="(project, i) in this.projects"
      :key="i"
      class="project__container"
      :class="[this.getClassName(i), project.name]"
    >
      <div class="center__box">
        <div class="title">
          {{ project.name }}
        </div>
        <div class="content">
          <div class="date">
            <div class="subTitle">기간 :</div>
            <div class="text">{{ project.date }}</div>
          </div>
          <div class="description">
            <div class="subTitle">요약 :</div>
            <div class="text">{{ project.description }}</div>
          </div>
        </div>
      </div>
    </div>
    <img
      src="../assets/arrowLeft.png"
      class="arrow__left"
      @click="this.goToPrv"
    />
    <img
      src="../assets/arrowRight.png"
      class="arrow__right"
      @click="this.goToNext"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: "TymiRoom",
          date: "2022.05.20 ~ 2022.05.26",
          description: "추천 알고리즘을 적용한 영화 커뮤니티 사이트",
        },
        {
          name: "OctopUs",
          date: "2022.07.05 ~ 2022.08.19",
          description:
            "WebRTC 화상 채팅 기술과 게임 캐릭터를 접목한 생동감 있는 마피아 게임 ",
        },
        {
          name: "독초도감",
          date: "2022.08.22 ~ 2022.10.07",
          description:
            "일상생활에서 쉽고 재미있게 자연에 대한 학습 기회를 제공하는 서비스",
        },
        {
          name: "풀깨비뎐",
          date: "2022.10.11 ~ 2022.11.21",
          description: "역사 학습 3D 인터랙티브 웹 게임",
        },
      ],
      timer: 0,
      nowPage: 0,
    };
  },
  mounted() {
    setInterval(() => {
      this.timer += 1;
      if (this.timer === 10) {
        this.timer = 0;
        this.nowPage += 1;
      }
      if (this.nowPage === 4) {
        this.nowPage = 0;
      }
    }, 1000);
  },

  methods: {
    getClassName(idx) {
      if (idx === this.nowPage - 1) return `prv`;
      else if (idx === this.nowPage) return `now`;
      else if (idx === this.nowPage + 1) return `next`;
      else if (idx === 0 && this.nowPage === 3) return `next`;
      else if (idx === 3 && this.nowPage === 0) return `prv`;
      else return "hidden";
    },

    goToPrv() {
      if (this.nowPage === 0) {
        this.nowPage = 3;
      } else {
        this.nowPage -= 1;
      }
      this.timer = 0;
    },

    goToNext() {
      if (this.nowPage === 3) {
        this.nowPage = 0;
      } else {
        this.nowPage += 1;
      }
      this.timer = 0;
    },
  },
};
</script>

<style scoped>
.main__container {
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background-color: black;
}

.project__container {
  height: 75vh;
  width: 75vw;
  border-radius: 10px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 2s ease 0s;
}

.TymiRoom {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/tymiroom/tymiroomMain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.OctopUs {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/octopus/OctopusMain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.독초도감 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/dokcho/DokchoMain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.풀깨비뎐 {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url("../assets/pul/PulMain.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.prv {
  transform: translate3d(-100%, 0px, 0px) scale3d(0.8, 0.8, 0.8);
  top: 12.5vh;
  left: 15vw;
  z-index: 0;
}

.now {
  transform: translate3d(0px, 0px, 0px);
  top: 12.5vh;
  left: 12.5vw;
  z-index: 1;
}

.next {
  transform: translate3d(100%, 0px, 0px) scale3d(0.8, 0.8, 0.8);
  top: 12.5vh;
  left: 10vw;
  z-index: 0;
}

.hidden {
  transform: translate3d(0px, 0px, 0px) scale3d(0.5, 0.5, 0.5);
  z-index: -1;
  top: 12.5vh;
  left: 15vw;
}

.center__box {
  height: 35vh;
  width: 25vw;
  padding: 3vh 3vw;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  box-shadow: 0 0 15px 10px rgba(255, 255, 255, 0.8);
}

.title {
  text-align: center;
  font-size: 4vmin;
  font-weight: bold;
  margin-bottom: 3vh;
}

.date {
  display: flex;
  margin: 2vh 0;
}

.description {
  display: flex;
  margin: 2vh 0;
}

.subTitle {
  width: 3vw;
}

.text {
  width: 22vw;
  word-break: keep-all;
}

.arrow__left {
  width: 2vw;
  height: 10vh;
  position: absolute;
  top: 45vh;
  left: 9vw;
  opacity: 0.7;
  z-index: 2;
  cursor: pointer;
}

.arrow__right {
  width: 2vw;
  height: 10vh;
  position: absolute;
  top: 45vh;
  right: 9vw;
  opacity: 0.7;
  z-index: 2;
  cursor: pointer;
}
</style>
