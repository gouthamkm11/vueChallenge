<template>
    <div class="loginContainer">
        <input type="text" placeholder="Username" v-model="userName" v-on:input="emitData">
        <input type="password" placeholder="Password" v-model="password">
        <button v-on:click='displayName()'>Login</button>
        <p>{{msg}}</p>
        {{userName}} {{password}}
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            userName : '',
            password : ''
        }
    },
    methods: {
        displayName: function(){
            console.log(`Username is ${this.userName}`)
        },
        emitData: function(event){
            this.$emit('passMessage', event.target.value);
        }
    },
    props:['msg']
}
</script>



<style>
    .loginContainer{
        display: flex;
        flex-wrap: wrap;
        margin: 5px auto;
        padding: 5px;
        width: 25%;
        align-content: center;
        justify-content: center;
        border: 5px solid black;
    }

    .loginContainer > input{
        margin: 5px;
        padding: 5px;
        width: 80%;
    }

    .loginContainer > button{
        margin: 5px auto;
        padding: 1px;
        width: 35%;
    }

</style>

