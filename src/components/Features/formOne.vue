<template>
    <div>
        <b-form v-on:submit.prevent="displayData">
            <b-form-group  horizontal id="formGroup1"
                            label="Username"
                            label-for="input1">
                <b-form-input   id="input1"
                                type="text"
                                placeholder="Username"
                                v-model="userName"
                                required
                                >
                </b-form-input>
            </b-form-group>
            <b-form-group  horizontal id="formGroup2"
                            label="Password"
                            label-for="input2">
                <b-form-input   id="input2"
                                type="password"
                                placeholder="password"
                                v-model="password"
                                required
                                >

                </b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Login</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data: function(){
        return {
            userName:'',
            password:''
        }
    },
    methods:{
        displayData: function(){
            alert(`Entered username is ${this.userName} and Entered password is ${this.password}`)
        }
    }
}
</script>
