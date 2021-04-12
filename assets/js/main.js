Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
        inputSearch: '',
        movies: [],
        series: [],
    },
    methods: {
        searchContent () {
            this.searchMovie();
            this.searchSerie();
        },
        searchMovie() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=4117a3cbfe3896f4856820d20acc2358&query='+ this.inputSearch +'&language=it-IT')
            .then((results) => {
                this.movies = (results.data.results);
                this.langFlag();
            });
        },
        searchSerie() {
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=4117a3cbfe3896f4856820d20acc2358&language=it_IT&query='+ this.inputSearch)
            .then((results) => {
                this.series = (results.data.results);
                this.langFlag();
                this.voteStar();
            });
        },
        langFlag() {
            for(i = 0; i < this.movies.length; i++) {
                if(this.movies[i].original_language == "en") {
                    this.movies[i].original_language = "🇬🇧";
                }
                if(this.movies[i].original_language == "it") {
                    this.movies[i].original_language = "🇮🇹";
                }
                if(this.movies[i].original_language == "es") {
                    this.movies[i].original_language = "🇪🇸";
                }
                if(this.movies[i].original_language == "fr") {
                    this.movies[i].original_language = "🇫🇷";
                }
                if(this.movies[i].original_language == "de") {
                    this.movies[i].original_language = "🇩🇪";
                }
            }

            for(i = 0; i < this.series.length; i++) {
                if(this.series[i].original_language == "en") {
                    this.series[i].original_language = "🇬🇧";
                }
                if(this.series[i].original_language == "it") {
                    this.series[i].original_language = "🇮🇹";
                }
                if(this.series[i].original_language == "es") {
                    this.series[i].original_language = "🇪🇸";
                }
                if(this.series[i].original_language == "fr") {
                    this.series[i].original_language = "🇫🇷";
                }
                if(this.series[i].original_language == "de") {
                    this.series[i].original_language = "🇩🇪";
                }

            }
        },
        voteStar() {
            for(i = 0; i < this.movies.length; i++) {
                let vote = Math.floor(this.series[i].vote_average) / 2;
                if(vote > 0 && vote < 3) {
                    vote = "⭐️";
                }
                if(vote > 2 && vote < 5) {
                    vote = "⭐️⭐️";
                }
                if(vote > 4 && vote < 7) {
                    vote = "⭐️⭐️⭐️";
                }
                if(vote > 6 && vote < 9) {
                    vote = "⭐️⭐️⭐️⭐️";
                }
                if(vote > 8 && vote < 11) {
                    vote = "⭐️⭐️⭐️⭐️⭐️";
                }
            }

            for(i = 0; i < this.series.length; i++) {
                let vote = Math.floor(this.series[i].vote_average) / 2;
                if(vote > 0 && vote < 3) {
                    vote = "⭐️";
                }
                if(vote > 2 && vote < 5) {
                    vote = "⭐️⭐️";
                }
                if(vote > 4 && vote < 7) {
                    vote = "⭐️⭐️⭐️";
                }
                if(vote > 6 && vote < 9) {
                    vote = "⭐️⭐️⭐️⭐️";
                }
                if(vote > 8 && vote < 11) {
                    vote = "⭐️⭐️⭐️⭐️⭐️";
                }
            }
        }
    }
});