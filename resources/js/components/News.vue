<template>
    <div>
        <h1> News Articles </h1>
        <div>
            <ul>

                <li  v-for = "news in paginatedArray" v-bind:key = "news.id">
                    <h4> {{news.name}} </h4>
                    {{news.description}}
                    <br>
                    <!-- :href allows vue to read url -->
                    <a :href = "`${news.url}`"> {{news.url}} </a>
                </li>
            </ul>
            <button @click="prevPage">
                Back
            </button>
            <button @click="nextPage">
                Next
            </button>
            
        </div>
    </div>
</template>

<script src = "./News.js"></script>
