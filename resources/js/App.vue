<template>
    <div class="container mx-auto">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <div
                        class="max-w-7xl mx-auto grid px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-6 lg:px-8"
                    >
                        <router-link
                            :to="{ name: 'owners:list' }"
                            class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Owners</router-link
                        >
                        <router-link
                            :to="{ name: 'patients:list' }"
                            class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Patients</router-link
                        >
                        <div class="flex">
                            Search
                            <input
                                type="text"
                                placeholder="Find a patient or owner"
                                class="ml-2 border pl-2"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <router-view> </router-view>
    </div>
</template>

<script>
export default {};
</script>
