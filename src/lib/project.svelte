<script>
    export let project;
</script>

<h1>{project.title}</h1>
<p>{project.description}</p>
<!-- svelte-ignore a11y-img-redundant-alt -->
<img src={project.img_url} alt="Project Image"/>
<p>{project.date}</p>