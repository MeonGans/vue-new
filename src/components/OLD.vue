<template>
  <Survey v-if="survey" :survey="survey"/>
</template>
<script>
// import "survey-core/defaultV2.min.css";
import "@/assets/styles/defaultV2.css"
import "@/assets/styles/reset.css"

import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-vue-ui";

StylesManager.applyTheme("defaultV2");

import axios from 'axios';

// const surveyJson = {
//   showProgressBar: "top",
//   pages: [
//     {
//       name: "page1",
//       // title: "Тут вопрос, если надо.",
//       title: null,
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/1.png",
//           imageFit: "cover",
//           // imageWidth: "365px",
//           // imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "1",
//           correctAnswer: "2",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/1-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/1-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/1-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/1-4.png"
//             }
//           ],
//         }
//       ]
//     },
//     {
//       name: "page2",
//       //title: "Тут вопрос, если надо.",
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/2.png",
//           imageFit: "cover",
//           imageWidth: "365px",
//           imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "2",
//           correctAnswer: "3",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/2-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/2-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/2-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/2-4.png"
//             }
//           ],
//         }
//       ]
//     },
//     {
//       name: "page3",
//       //title: "Тут вопрос, если надо.",
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/3.png",
//           imageFit: "cover",
//           imageWidth: "365px",
//           imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "3",
//           correctAnswer: "3",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/3-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/3-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/3-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/3-4.png"
//             }
//           ],
//         }
//       ]
//     },
//     {
//       name: "page4",
//       //title: "Тут вопрос, если надо.",
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/4.png",
//           imageFit: "cover",
//           imageWidth: "365px",
//           imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "4",
//           correctAnswer: "1",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/4-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/4-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/4-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/4-4.png"
//             }
//           ],
//         }
//       ]
//     },
//     {
//       name: "page5",
//       //title: "Тут вопрос, если надо.",
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/5.png",
//           imageFit: "cover",
//           imageWidth: "365px",
//           imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "5",
//           correctAnswer: "2",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/5-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/5-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/5-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/5-4.png"
//             }
//           ],
//         }
//       ]
//     },
//     {
//       name: "page6",
//       //title: "Тут вопрос, если надо.",
//       elements: [
//         {
//           type: "image",
//           name: "banner",
//           imageLink: "/images/q/6.png",
//           imageFit: "cover",
//           imageWidth: "365px",
//           imageHeight: "305px",
//         },
//         {
//           type: "imagepicker",
//           name: "6",
//           correctAnswer: "4",
//           minImageWidth: 120,
//           minImageHeight: 100,
//           maxImageWidth: 180,
//           maxImageHeight: 150,
//           isRequired: true,
//           choices: [
//             {
//               value: "1",
//               imageLink: "/images/a/6-1.png"
//             }, {
//               value: "2",
//               imageLink: "/images/a/6-2.png"
//             }, {
//               value: "3",
//               imageLink: "/images/a/6-3.png"
//             }, {
//               value: "4",
//               imageLink: "/images/a/6-4.png"
//             }
//           ],
//         }
//       ]
//     },
//   ],
//   showPrevButton: false,
//   showPageTitles: true,
//   showNextButton: false,
//   showPageNumbers: false,
//   //progressBarType: "correctQuestions",
//   //progressBarType: "requiredQuestions",
//   completeText: "Complete",
//   completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>",
//   showQuestionNumbers: "off",
//   questionTitlePattern: "numTitle",
//   goNextPageAutomatic: true,
// };

// export default {
//   name: "MyFirstSurvey",
//   components: {
//     Survey,
//   },
//   data() {
//     const survey = new Model(surveyJson)
//     survey.locale = "ru";
//     survey.focusFirstQuestionAutomatic = false;
//
//     survey.onComplete.add(this.alertResults);
//     setTimeout(() => {
//       this.alertResults();
//     }, 700);
//     //return this.alertResults();
//     return {
//       survey,
//     };
//   },
//   methods: {
//      alertResults() {
//        // const results = JSON.stringify(sender.data);
//        const viewInfo = JSON.stringify(this.info);
//       alert(viewInfo);
//     },
//     async getInfo() {
//        return this.info;
//     }
//   },
//   async mounted() {
//     axios
//         .get('http://prizma/api/questions')
//         .then(response => (this.info = response.data));
//   }
// };
export default {
  name: 'MyFirstSurvey2',
  components: {
    Survey,
  },
  data() {
    return {
      survey: null,
      info: '',
    };
  },

  methods: {
    async init() {
      const { data } = await axios.get('http://prizma/api/questions');
      this.info = data;
      this.survey = new Model(this.info);
      // this.survey = new Model(surveyJson);
      this.survey.locale = 'ru';
      this.survey.focusFirstQuestionAutomatic = false;
      this.survey.onComplete.add(this.alertResults);
    },
    alertResults(sender) {
      const results = JSON.stringify(sender.data);
      //const viewInfo = JSON.stringify(this.info);
      alert(results);
    },
  },
  mounted() {
    this.init();
  },
};
</script>

<style>
</style>