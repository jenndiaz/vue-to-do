<script setup>
import NewItemForm from './NewItemForm.vue'
</script>

<template>

  <NewItemForm  @todo-added="addItem">
  </NewItemForm>

  <ul>
    <li
      v-for="item in ToDoItems"
      v-bind:key="ToDoItems.id">
      {{ item.task }}
    </li>
  </ul>

  <button @clear-list="clearList">Clear List</button>

</template>

<script>
export default {
  data(){
    return{
      ToDoItems: []
  };
},
  methods: {
    addItem(task) {
      console.log("todo-added", task )
      this.ToDoItems.push({ task });
      console.log(this.ToDoItems[0])
    },
    clearList(){
      this.ToDoItems = []
    }
  },
  };
</script>
