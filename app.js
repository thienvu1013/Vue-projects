const app = Vue.createApp({
    // data or function to react to event, or component template
    // template: '<h2> I am the template</h2>'
    data(){
        return {
            showbooks: true,
            title:'The final empire',
            author: 'Brandon',
            age:45,
            x:0,
            y:0,
            books:[
                {title:"name of the wind1", author:'peter', isFav:true},
                {title:"name of the wind2", author:'peter', isFav:true},
                {title:"name of the wind3", author:'peter',isFav:false},
                {title:"name of the wind4", author:'peter',isFav:false},
                {title:"name of the wind5", author:'peter',isFav:true},
            ],
            url:"https://thienvunguyen.com/",
        }
    },
    methods:{
        increaseAge(){
            this.age++;
        },
        toggle(){
            this.showbooks = !this.showbooks;
        },
        handleEvent(e,number){
            console.log(number);
        },
        handleMouseMove(e){
            this.x = e.offsetX;
            this.y = e.offsetY;
            
        },
        toggleFav(item){
            theBook = item
            this.books.forEach(book=>{
                if (book.title === theBook.title){
                    book.isFav = !book.isFav
                }
            });
        }
    },
    computed:{
        filteredBooks(){
            return this.books.filter((book)=>book.isFav)
        }
    }
})
// mounting vue to an id of 'app'
app.mount('#app')

console.log("hello vue");