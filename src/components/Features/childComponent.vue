<template>
    <div>
        <li v-on:click="emitData">{{passedData=inputData.name}}</li>
    </div>    
</template>

<script>
export default {
    props:['inputData'],
    data: function(){
        return {
            passedData:''
        }
    },
    methods:{
        emitData: function(event){
            this.$emit('emitData', event.target.innerHTML);
        }
    }
}
</script>

<style>

</style>


