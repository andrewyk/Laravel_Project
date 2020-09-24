export default {
    data(){
        return {
            news: [],
            pageNum: 0, //Beginning page for pagination
            unique_id:0, //Created own ID since there are not unique in API response
            maxPageSize:0, 
            paginatedArray: [], //Array used to get 12 news article at a time
            paginatedSize: 12, //Change to display certain amount of articles per page
        }
    },

    created() {
        this.getNews();
    },

    methods:{
        //API GET called from ./routes/api.php
        getNews(){
            fetch("api/news")
                //Use res.json() to get correct data
                .then(res => res.json())
                .then(res => {
                    this.news = res.sources
                    this.pageCount(); //Function called to get maxpagination Size
                    this.paginatedData(); //Get arrazy of paginated Data
                })
                
        },

        pageCount(){
            //Function return the max size of pages for pagination
            let arrayLen = this.news.length
            this.maxPageSize =  Math.ceil(arrayLen/this.paginatedSize) - 1
        },

        paginatedData(){
            //Function that sets a new state of the paginated array.
            const start = this.pageNum * this.paginatedSize
            const end = start + this.paginatedSize
            this.paginatedArray = this.news.slice(start,end)
        },


        nextPage(){
            // Increments the page number to show the next pagination
            this.pageNum++;
            if (this.pageNum > this.maxPageSize){ //Checks if pageNum is greater than maxPageSize
                this.pageNum = 0
            }
            this.paginatedData()
        },

        prevPage(){
            //Function decrements Pagenum to show the previous pagination
            this.pageNum--;
            if (this.pageNum < 0){ //Checks if pageNum is less than 0
            
                this.pageNum = this.maxPageSize
            }
            this.paginatedData()
        },



    }
}