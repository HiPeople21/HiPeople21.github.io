<script>
    import { onMount } from 'svelte';
    import Project from '$lib/project.svelte';
    let projects = [];
    let error;

    onMount(async () => {
        try{
            let response = await fetch('https://Server.hipeople21.repl.co');
            projects = (await response.json()).Projects;
        } catch (err) {
            error = err;
        }
    })
</script>

{#if error}
    <p>There was an error fetching the projects.</p>
{:else}
    {#each projects as project}
        <Project {project}/>
    {/each}
{/if}