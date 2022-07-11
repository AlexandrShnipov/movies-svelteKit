<script context="module">
    export const prerender = true;

    export async function load({fetch}) {
        const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1`)
        const data = await res.json();
        console.log(data)
        if (res.ok) {
            return {
                props: {popular: data.results}
            }
        }
    };
</script>

<script>
    import SearchMovies from "../components/SearchMovies.svelte";
    export let popular;
    import PopularMovies from "../components/PopularMovies.svelte";
    import {fly} from 'svelte/transition';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app"/>
</svelte:head>

<section
        in:fly={{y: 50, duration: 500}}
        out:fly={{duration: 500}}>
    <SearchMovies/>
    <PopularMovies {popular}/>
</section>


<style>

</style>
