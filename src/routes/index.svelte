<script context="module">
    export let load = async ({fetch}) => {
        let response = await fetch('https://Server.hipeople21.repl.co');
        return {
            status: response.status,
            props: {
                projects: response.ok && (await response.json())
            }
        };
    }
</script>
<script>
    export let projects;
  </script>
<h1>{projects}</h1>