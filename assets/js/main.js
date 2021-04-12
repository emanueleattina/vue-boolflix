Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
        inputSearch: '',
        movies: []
    },
    methods: {
        searchMovie() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=4117a3cbfe3896f4856820d20acc2358&query='+ this.inputSearch)
            .then((results) => {
                this.movies = (results.data.results);
        });
        }
    }
});