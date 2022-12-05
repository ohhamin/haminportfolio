<template>
  <div class="project__container">
    <div class="tymiroom__container">
      <div class="title">TymiRoom</div>
      <div class="discription">
        싸이월드 컨셉으로 SNS와 영화를 결합한 웹 사이트
      </div>
      <hr width="100%" color="#bbbbbb" size="1" />
      <div class="role">Backend / Frontend</div>
      <div class="stacks">
        <div class="stack lang" v-for="(stack, i) in stack_lang" :key="i">
          {{ stack }}
        </div>
        <div class="stack" v-for="(stack, i) in stack" :key="i">
          {{ stack }}
        </div>
      </div>
      <div class="subTitle">기간</div>
      <div class="content">2022.05.20(금) ~ 2022.05.26(목)</div>
      <div class="subTitle">주요 기능</div>
      <div class="content" v-for="(func, i) in functions" :key="i">
        <img :src="require('../assets/tymiroom/' + func[1] + '.gif')" alt="" />
        {{ func[0] }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    const stack_lang = ["python", "JavaScript"];
    const stack = ["django", "vue.js"];
    const functions = [
      ["싸이월드 컨셉의 친구, 방명록, 인생 영화 등 SNS 기능", "func_sns"],
      ["영화 정보를 볼 수 있고, 영화의 리뷰를 달 수 있음", "func_movie"],
      [
        "영화 리뷰를 달면 레벨업을 할 수 있고, 레벨업시 내 방을 꾸미는 요소를 추가",
        "func_level",
      ],
      ["미니게임으로 관련된 영화를 추천", "func_game"],
    ];

    return {
      stack_lang,
      stack,
      functions,
    };
  },
};
</script>

<style scoped>
.project__container {
  background-color: pink;
  opacity: 0.8;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tymiroom__container {
  width: 50vw;
  height: auto;
  padding: 5vh 5vw;
  margin: 15vh 0;
  border-radius: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 2vh;
}

.role {
  font-weight: bold;
}

hr {
  margin: 2vh 0;
}

.stacks {
  display: flex;
  margin-top: 2vh;
}

.stack {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5vw;
  padding: 5px 10px;
  background-color: #a7c957;
  border-radius: 10px;
}

.lang {
  background-color: #fff760;
}

.subTitle {
  font-size: 20px;
  font-weight: bold;
  padding: 1px 1px;
  margin-top: 3vh;
}

.content {
  height: auto;
  margin-left: 8px;
}
</style>
