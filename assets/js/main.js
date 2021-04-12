Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
        inputSearch: 'avatar',
        movies: [
            {
                "title": "Natale in India",
                "original_title": "Natale in India",
                "vote_average": 4.8,
                "overview": "Il giudice Enrico Paci e l'ingegner Fabio De Tassis si conoscono alla nursery nel 1987 dove sembra evidente che, a causa di un black out, i rispettivi figli maschi sono andati scambiati.",
            }
        ]
    },
    mounted() {
        axios.get('https://api.themoviedb.org/3/search/movie?api_key=4117a3cbfe3896f4856820d20acc2358&query='+ this.inputSearch +'&language=it')
        .then((results) => {
            this.movies = (results.data.movies);
        });
    },
    methods: {
        searchMovie() {

        }
    }
});