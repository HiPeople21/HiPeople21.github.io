<script context='module'>
    export async function load({params}){
        return {
            status: 200,
            props: {
                id: params.id ,
            }
        };
    }
</script>

<script>
    export let id;
</script>

<p>{id}</p>