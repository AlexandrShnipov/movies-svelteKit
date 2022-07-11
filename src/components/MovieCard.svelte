<script>
    export let movie;
</script>

<div class="movie-card">
    <a sveltekit:prefetch sveltekit:noscroll href={`/movie/${movie.id}`}>
    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}>
    </a>
    <div class="description">
        <h2>{movie.title}</h2>
        <p>{movie.release_date}</p>
    </div>
</div>


<style>

    a{
        display: block;
        height: 85%;
        margin-bottom: 1rem;
    }

    .movie-card{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 1rem;
    }

    a:after{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 1rem;
        margin-bottom: 1rem;

    }

h2{
    font-size: .9rem;
    margin-bottom: .5rem;
}

p{
    font-size: .7rem;
}
</style>