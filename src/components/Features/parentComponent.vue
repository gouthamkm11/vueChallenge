<template>
<!-- v-on:click="boolValue=true" -->
    <div>
        <div>
            <app-child  v-for="person in persons"
                        :key="person.id"
                        :inputData="person"
                        v-on:emitData="receivedData=$event"
                        >
            </app-child>
        </div>
        <div v-if="receivedData">
            {{`user clicked on ${receivedData}`}}
        </div>
    </div>    
</template>

<script>
import child from './childComponent.vue';
export default {
    data: function(){
        return {
            persons:[
                {name:'Goutham',age:27,graduate:false},
                {name:'Kumar',age:25,graduate:true},
                {name:'Somasundaram',age:23,graduate:false}
            ],
            receivedData:'',
            boolValue:false
        }
    },
    components: {
        'app-child':child
    }
}
</script>

<style>

</style>


