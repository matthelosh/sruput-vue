<template lang="pug">
div(style="position: relative", v-bind:class="{'open': openSuggestion}")
  input.form-control(type="text", v-bind:value="value" @input="updateValue($event.target.value)", @keydown.enter = 'enter', @keydown.down = 'down', @keydown.up = 'up')
  ul.dropdown-menu(style="width: 100%")
    li(v-for="(suggestion, index) in matches", v-bind:class="{'active': isActive(index)}", @click="suggestionClick(index)")
      a(href="#") {{suggestion.city}} <small> {{ suggestion.state}} </small>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    suggestions: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      open: false,
      current: 0
    }
  },
  computed: {
    matches () {
      return this.suggestions.filter((obj) => {
        return obj.city.indexOf(this.value) >= 0
      })
    },
    openSuggestion () {
      return this.selection !== '' &&
             this.matches.length !== 0 &&
             this.open === true
    }
  },
  methods: {
    updateValue (value) {
      if (this.open === false ) {
        this.open = true
        this.current = 0
      }
      this.$emit('input', value)
    },

    enter () {
      this.$emit('input', this.matches[this.current].city)
      this.open = false
    },

    up () {
      if (this.current > 0 ) {
        this.current--
      }
    },
    down () {
      if (this.current < this.matches.length -1 ) {
        this.current++
      }
    },

    suggestionClick (index) {
      this.$emit('input', this.matches[index].city)
      this.open = false
    }
  }
}
</script>

<style lang="sass" scoped>

</style>
