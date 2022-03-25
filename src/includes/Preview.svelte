<script>
    export let item
</script>

<!-- Product Card Container -->
<div class="flex flex-col items-center justify-center mt-32">
    <!-- Product Card -->
    <div class="flex flex-col shadow-md cursor-pointer w-96">
        <!-- Preview -->
        <div class="inline relative group h-48">
            <!-- Thumbnail -->
            <img
                class="absolute rounded-t object-cover h-full w-full"
                src="https://images.unsplash.com/photo-1627384113858-ce93ff568d1f?auto=format&fit=crop&w=800&q=75"
                alt="Product Preview"
            />

        </div>

        <!-- Body -->
        <div class="flex flex-col bg-white rounded-b p-3">
            <!-- Title -->
            <div class="text-sm font-semibold text-gray-900 hover:underline truncate">
                {item.oneWords}
                {item.twoWords}
                {item.threeWords}
            </div>

            <!-- Price -->
            <div class="text-sm text-gray-600 font-bold mt-4 mb-1">$23</div>

            <!-- Body -->
            <div class="flex flex-row mt-2">
                <!-- Detail Column -->
                <div class="flex flex-col flex-auto">
                    <!-- Rating -->
                    <div class="flex flex-row group">
                        <i
                            class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Worst"
                        />

                        <i
                            class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Bad"
                        />

                        <i
                            class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Not Bad"
                        />

                        <i
                            class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Good"
                        />

                        <i
                            class="mdi mdi-star text-xs text-amber-400 
                            hover:text-amber-500 transition-all duration-200"
                            title="Awesome"
                        />
                    </div>
                </div>

                <!-- Button Column -->
                <div class="flex flex-row flex-auto justify-end">
                    <!-- Preview Link Button -->
                    <a
                        class="flex text-xs border px-3 my-auto py-2 
                        border-amber-500 group hover:bg-amber-500 
                        rounded-xss
                        transition-all duration-200"
                    >
                        <!-- Text -->
                        <div
                            class="text-xxs text-amber-700 font-semibold ml-2
                            group-hover:text-white delay-100"
                        >
                            Reserve
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>
