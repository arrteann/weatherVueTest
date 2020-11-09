<template>
    <div>
        <input :type="type" :placeholder="placeholder" v-model="city" @keyup="search">
    </div>
</template>

<script>
export default {
    data(){
        return {
            city : '',
        }
    },
    props : {
        type : {
            type : String
        },
        placeholder : {
            type: String
        }
    },
    methods:{
        search(){
            this.$emit('search',this.city);
        }
    }
}
</script>

<style lang="scss" scoped>
    input {
        padding: 10px 20px;
        width: 60%;
        border: 2px solid darkslateblue;
        font-size: 1rem;
        background-color: transparent;
        border-radius: 10px 4px 10px 4px;
        text-transform: uppercase;
        color: white;
        &::placeholder { 
            text-transform: uppercase;
            color: white;
        }
    }
</style>