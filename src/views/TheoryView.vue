<template>
  <div class="theory">
    <TheoryComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import TheoryComponent from '@/components/TheoryComponent.vue'

export default {
  name: 'TheoryView',
  components: {
    TheoryComponent
  }
}
</script>
