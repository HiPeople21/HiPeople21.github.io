<script context="module">
    export let load = async ({fetch}) => {
        let response = await fetch('./api');
        let { projects } = await response.json()
        return {
            status: response.status,
            props: {
                projects: response.ok && projects
            }
        };
    }
</script>

<script>
    export let projects;
</script>

<h1>{projects.Projects}</h1>