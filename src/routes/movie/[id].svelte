<script context="module">
    export const prerender = true;

    export async function load({fetch, params}) {
        console.log(params.id)
        const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US`)
        const movieDetail = await res.json();
        console.log(movieDetail)
        if (res.ok) {
            return {
                props: {movieDetail}
            }
        }
    };
</script>

<script>
    export let movieDetail;
    import {fly} from 'svelte/transition';
</script>

<div class="movie-details"
     in:fly={{y: 50, duration: 500, delay: 500}}
     out:fly={{duration: 500}}>
    <div class="img_container">
        <img src={`https://image.tmdb.org/t/p/original${movieDetail.backdrop_path}`} alt={movieDetail.title}>
    </div>
    <div class="movie-description">
        <h1>{movieDetail.title}</h1>
        <p class="movie-description__text">{movieDetail.overview}</p>
        <p>
            <span>Release date: </span>
            {movieDetail.release_date} <br>
            <span>Budget:</span>
            {movieDetail.budget} <br>
            <span>Rating:</span>
            {movieDetail.vote_average} <br>
            <span>Runtime</span>
            {movieDetail.runtime} minuts
        </p>
    </div>
</div>

<style>
    h1 {
        padding: 1rem 0 2rem;
    }

    p {
        padding: 1rem 0;
    }

    .img_container {
        width: 100%;
    }

    img {
        width: 100%;
        border-radius: 1rem;
    }
    span{
        font-weight: bold;
    }
</style>


