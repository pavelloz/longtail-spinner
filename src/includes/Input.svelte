<script>
    import { currentSet } from "../stores/currentSet.js"
    export let value
    export let order
</script>

<textarea
    class="h-32 p-2 resize-none rounded border-slate-300 border"
    bind:value
    on:keyup={() => { $currentSet[order] = value; }}
/>
