<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <div
                        class="max-w-7xl mx-auto grid px-4 py-6 sm:grid-cols-2 sm:gap-8 sm:px-6 sm:py-8 lg:grid-cols-6 lg:px-8"
                    >
                        <router-link
                            :to="{ name: 'login' }"
                            class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Login</router-link
                        >
                        <router-link
                            :to="{ name: 'register' }"
                            class="text-base font-medium text-gray-500 hover:text-gray-900"
                            >Register</router-link
                        >
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>
<script>
export default {};
</script>
