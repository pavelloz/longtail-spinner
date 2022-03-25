<script>
    import Input from "./Input.svelte"
    export let set
</script>

<div class="grid grid-cols-3 space-x-10">
    {#each set as value, i}
        <Input {value} order={i}/>
    {/each}
</div>
