<template>
<div id="app">
  <app-header></app-header>
  <app-parent></app-parent>
  <!-- <app-loginContainer v-bind:msg="message" v-on:passMessage="getData = $event"></app-loginContainer> -->
  <!-- <app-pComponent></app-pComponent> -->
  <!-- <app-forms></app-forms>
  <app-form1></app-form1> -->
</div>
</template>

<script>
import Header from './components/Header/Header.vue';
import Login from './components/Features/loginContainer.vue';
import forms from './components/Features/Forms.vue';
import form1 from './components/Features/formOne.vue';
import parent from './components/Features/parentComponent.vue';

export default {
  components:{
    'app-header': Header,
    'app-loginContainer': Login,
    'app-forms' : forms,
    'app-form1': form1,
    'app-parent': parent
  },
  data: function(){
    return {
      message:'This is a great Message!',
      getData: '',
      persons:[
        {name:'Goutham',age:27,graduate:false},
        {name:'Kumar',age:27,graduate:true},
        {name:'Somasundaram',age:27,graduate:false}
      ]
    }
  }
}
</script>


<style>
 
</style>
