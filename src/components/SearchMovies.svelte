<script>
    let inputValue = '';
    let active = false;
    import {goto} from '$app/navigation';
    import {fly} from 'svelte/transition';

    const cancelInactive = () => {
        if (inputValue) {
            active = true;
        } else {
            active = false;
        }
    }

    const submitSearch = () => {
      goto('/search/'+inputValue);
    }
</script>

<form on:submit|preventDefault ={submitSearch}>
    {#if !active}
        <label
                in:fly={{y: -10, duration: 500}}
                out:fly={{y: -10, duration: 500}}
                for="search_movie">
            Search Movies
        </label>
    {/if}
    <input
            on:blur={cancelInactive}
            on:focus={() => (active = true)}
            bind:value={inputValue}
            type="text"
            id="search_movie"
            class={active ? 'selected' : ''}>

    {#if inputValue}
        <button
                in:fly={{x: 0, duration: 500}}
                out:fly={{x: 20, duration: 500}}>
            Search
        </button>
    {/if}
</form>

<style>
    form {
        position: relative;
        margin: 1rem;
        width: 30%;
    }

    button {
        font-size: .7rem;
        line-height: 1;
        padding: 0 1rem;
        background: rgb(96, 110, 201);
        color: white;
        font-weight: bold;
        border: none;
        position: absolute;
        bottom: 50%;
        right: -2rem;
        transform: translate(0, 50%);
        height: 100%;
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
    }

    input {
        width: 100%;
        border: none;
        font-size: 1rem;
        outline: transparent;
        color: rgb(255, 255, 255);
        transition: background .75s ease-out;
        font-weight: bold;
        background: rgb(63, 63, 63);
        border-radius: 10px;
        padding: 1rem;
    }

    input.selected {
        background: rgb(50, 50, 50);
    }

    label {
        position: absolute;
        font-size: .8rem;
        top: 50%;
        left: 0;
        transform: translate(0, -50%);
        pointer-events: none;
        color: #fff;
        padding: 0 1rem;
    }
</style>