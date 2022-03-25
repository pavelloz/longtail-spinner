<script>
    import uslug from "uslug"
    import combinate from "combinate"
    import { onMount } from "svelte"

    import { currentSet } from "../stores/currentSet.js"

    import Logo from "../includes/Logo.svelte"
    import Inputs from "../includes/Inputs.svelte"

    import sets from "../includes/data.json"

    let collection = []
    let delimiter = "-"
    let selectedSet = "cars"

    onMount(async () => {
        currentSet.update((n) => sets[selectedSet])

        currentSet.subscribe((storeValue) => {
            const set = storeValue.map((set) => set.split(",").map(uslug))
            Spin(set)
        })
    })

    const Spin = (set) => {
        collection = combinate({ ...set }).map((obj) => {
            return {
                ...obj,
                text: `${obj[0]}${delimiter}${obj[1]}${delimiter}${obj[2]}`,
            }
        })
    }
</script>

<div class="antialiased text-gray-900 p-8">
    <header class="mb-10 flex">
        <a
            rel="external"
            target="_blank"
            href="https://documentation.platformos.com"
            class="inline-block m-auto sm:m-0"
        >
            <Logo />
        </a>
        <h1
            class="text-2xl font-light text-slate-600 border-l-2 border-l-slate-300 py-2 px-10 ml-10"
        >
            Longtail generator
        </h1>
    </header>

    <div class="w-full flex items-center">
        <ul class="flex space-x-5 mx-auto mb-8">
            {#each Object.keys(sets) as set}
                <li>
                    <button
                        class="capitalize rounded bg-emerald-700 text-white px-2 py-1"
                        on:click={() => currentSet.update((n) => sets[set])}>{set}</button
                    >
                </li>
            {/each}
        </ul>
    </div>

    <div class="md:max-w-full flex-grow">

        <div>
            <Inputs set={$currentSet} />

            <p class="text-sm text-slate-600 mt-3">Data format: comma separated, no line breaks</p>
        </div>

        <div class="border-t border-slate-300 py-5 mt-5">
            <p class="text-slate-600 mb-6 text-center">
                {#if collection.length}
                  Generated {collection.length} combinations
                {/if}
            </p>
            <ul
                class="justify-between grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
                {#each collection as item}
                    <li>
                        <a
                            href="/#{item.text}"
                            class="underline text-blue-700 hover:text-slate-700 text-sm"
                            >{item.text}</a
                        >
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>
