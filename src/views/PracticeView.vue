<template>
  <div class="practice">
    <PracticeComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import PracticeComponent from '@/components/PracticeComponent.vue'

export default {
  name: 'PracticeView',
  components: {
    PracticeComponent
  }
}
</script>
