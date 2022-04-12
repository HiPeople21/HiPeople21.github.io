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

    // onMount(async () => {
    //     try{
    //     let response = await fetch('https://Server.hipeople21.repl.co');
        
    //     console.log(response)
    //     projects = await response.json()
    //     } catch (err) {
    //         console.log(err)
    //     }
    // })

</script>


<h1>{projects.Projects}</h1>

