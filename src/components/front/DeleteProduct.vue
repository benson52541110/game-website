<template>
    <div class="deleteItem">
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              @click="removeItem()"
            >
              <font-awesome-icon icon="fa-solid fa-trash-can" />
            </button>
          </div>
</template>

<script>
export default {
  props: [],
  data () {
    return {

    }
  },
  methods: {
    removeItem () {
      this.$emit('deleteItem')
    }
  }
}
</script>

<style lang="scss" scope>
    .deleteItem {
    width: 10%;
    padding-left: 2.5%;
  }
</style>
