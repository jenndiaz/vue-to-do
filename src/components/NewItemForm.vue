<template>
  <h2>Add a New Task</h2>
  <form v-on:submit.prevent="submitForm">
     <label>New Task
    <input
      type="text"
      id="new-todo-input"
      name="new-todo"
      autocomplete="off"
      v-model="task"
      />
  </label>
  <label>
    <button
      class="submit"
      type="sumbit"
      value="Submit">
      Submit</button>
  </label>
  </form>

</template>



<script>
    export default {
    data() {
      return {
        task: "",
        formSubmitted: false
      };
    },
    methods: {
      submitForm: function () {
        this.formSubmitted = true
        this.$emit("todo-added", this.task)
        console.log("submit", this.task)
        this.task=""
      }
    },
  };


</script>

<style scoped>

</style>
