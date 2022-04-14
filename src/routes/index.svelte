<!-- <script context="module">
    export let load = async ({fetch}) => {
        let response = await fetch('https://Server.hipeople21.repl.co');
        return {
            status: response.status,
            props: {
                projects: response.ok && (await response.json())
            }
        };
    }
</script> -->

<script>
    import Projects from '$lib/projects.svelte';    

</script>


<Projects/>

