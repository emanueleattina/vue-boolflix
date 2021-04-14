Vue.config.devtools = true;

var app = new Vue ({
    el: '#root',
    data: {
        inputSearch: '',
        searched: false,
        movies: [],
        series: [],
        genres: [],
        popularMovies: [],
        homePage: true,
        // star:'<i class="fas fa-star"></i>',
    },
    created() {
        axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=4117a3cbfe3896f4856820d20acc2358&language=it-IT')
        .then((results) => {
            this.genres = (results.data.genres);

            for(i = 0; i < this.genres.length; i++) {
                this.genres[i].film = [];
            }
        });

        for(i = 1; i <= 7 ; i ++) {
            axios.get('https://api.themoviedb.org/3/movie/popular?api_key=4117a3cbfe3896f4856820d20acc2358&language=it-IT&page=' + i)
            .then((results) => {
                this.popularMovies = [...this.popularMovies, ...results.data.results];
            
                this.langFlag();
                // this.voteStar();
            });
        }
    },
    methods: {
        searchContent () {
            this.searchMovie();
            this.searchSerie();
            this.searched = true;
            this.homePage = false;
        },
        searchMovie() {
            axios.get('https://api.themoviedb.org/3/search/movie?api_key=4117a3cbfe3896f4856820d20acc2358&query='+ this.inputSearch +'&language=it-IT')
            .then((results) => {
                this.movies = (results.data.results);
                this.langFlag();
                // this.voteStar();
            });
        },
        searchSerie() {
            axios.get('https://api.themoviedb.org/3/search/tv?api_key=4117a3cbfe3896f4856820d20acc2358&language=it_IT&query='+ this.inputSearch)
            .then((results) => {
                this.series = (results.data.results);
                this.langFlag();
                // this.voteStar();
            });
        },
        // movieGenresPush() {
        //     for(i = 0; i < this.genres.length; i++) {
        //         this.filmSplitted[i] = [];
        //         for(j = 0; j < this.popularMovies.length; j++) {
        //             for(k = 0; k < this.popularMovies[j].genre_ids.length; k++) {
        //                 if(this.genres[i].id == this.popularMovies[j].genre_ids[k]) {
        //                     this.filmSplitted[i].push(this.popularMovies[j])
        //                 }
        //             }
        //         }
        //     }
        // },
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
                if(this.movies[i].original_language == "ja") {
                    this.movies[i].original_language = "🇯🇵";
                }
                if(this.movies[i].original_language == "pt") {
                    this.movies[i].original_language = "🇵🇹";
                }
                if(this.movies[i].original_language == "ru") {
                    this.movies[i].original_language = "🇷🇺";
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
                if(this.series[i].original_language == "ja") {
                    this.series[i].original_language = "🇯🇵";
                }
                if(this.series[i].original_language == "pt") {
                    this.series[i].original_language = "🇵🇹";
                }
                if(this.series[i].original_language == "ru") {
                    this.series[i].original_language = "🇷🇺";
                }
            }

            for(i = 0; i < this.popularMovies.length; i++) {
                if(this.popularMovies[i].original_language == "en") {
                    this.popularMovies[i].original_language = "🇬🇧";
                }
                if(this.popularMovies[i].original_language == "it") {
                    this.popularMovies[i].original_language = "🇮🇹";
                }
                if(this.popularMovies[i].original_language == "es") {
                    this.popularMovies[i].original_language = "🇪🇸";
                }
                if(this.popularMovies[i].original_language == "fr") {
                    this.popularMovies[i].original_language = "🇫🇷";
                }
                if(this.popularMovies[i].original_language == "de") {
                    this.popularMovies[i].original_language = "🇩🇪";
                }
                if(this.popularMovies[i].original_language == "ja") {
                    this.popularMovies[i].original_language = "🇯🇵";
                }
                if(this.popularMovies[i].original_language == "pt") {
                    this.popularMovies[i].original_language = "🇵🇹";
                }
                if(this.popularMovies[i].original_language == "ru") {
                    this.popularMovies[i].original_language = "🇷🇺";
                }
            }
        },
        getStars(stars) {
                return Math.floor(stars / 2);
        },
    }
});