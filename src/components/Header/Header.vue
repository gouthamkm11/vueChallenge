<template>
    <div>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">My Products</a></li>
            <li><a href="#">Carrers</a></li>
            <li><a href="#">Log Out</a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
    ul{
        border: 5px solid black;
        margin: 5px auto;
        padding: 0px;
        list-style-type: none;
        width: 90%;
    }

    li{
        display: inline-block;
        margin: 5px auto;
        padding: 5px;
        width: 22%;
        text-align: center;
        font-size: 1.5rem;
    }
    a{
        text-decoration: none;
        color: black;
        padding: 0px;
        margin: 0px;
    }
    a:hover{
        background-color: yellow;
        color: teal;
    }
</style>


