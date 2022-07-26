<template>
  <Survey v-if="survey" :survey="survey"/>
</template>
<script>
import "@/assets/styles/defaultV2.css"
import "@/assets/styles/reset.css"

import {StylesManager, Model} from "survey-core";
import {Survey} from "survey-vue-ui";

StylesManager.applyTheme("defaultV2");

import axios from 'axios';

export default {
  name: 'PracticeComponent',
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
      const { data } = await axios.get('http://prizma/api/questions/1');
      this.info = data;
      this.survey = new Model(this.info);
      this.survey.locale = 'ru';
      this.survey.focusFirstQuestionAutomatic = false;
      this.survey.onComplete.add(this.alertResults);
    },
    alertResults(sender) {
      const results = JSON.stringify(sender.data);
      alert(results);
    },
  },
  mounted() {
    this.init();
  },
};

for (let el of document.querySelectorAll('.sv-action__content')) el.style.display = 'none';

</script>
