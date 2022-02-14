<template>
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex justify-between h-16">
            <div
                class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
            >
                <div
                    class="flex-shrink-0 flex items-center font-bold text-indigo-600"
                >
                    The Pet Clinic
                </div>
                <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                    <router-link
                        :to="{ name: 'owners:list' }"
                        class="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                        Owners
                    </router-link>
                    <router-link
                        :to="{ name: 'patients:list' }"
                        class="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                    >
                        Patients
                    </router-link>
                </div>
            </div>
            <div
                class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
            >
                <button
                    type="button"
                    class="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <span class="sr-only">View notifications</span>
                    <BellIcon class="h-6 w-6" aria-hidden="true" />
                </button>

                <div as="div" class="ml-3 relative">Welcome</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {};
</script>
