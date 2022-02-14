<template>
    <div>
        <h2 class="text-center text-3xl font-bold text-indigo-600">
            Welcome to the Pet Clinic
        </h2>
        <div class="min-h-full flex items-center justify-center">
            <div
                class="flex-1 flex justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24"
            >
                <div class="mx-auto w-full max-w-sm lg:w-96">
                    <div>
                        <h2 class="mt-6 text-2xl font-semibold text-gray-900">
                            Register for an account
                        </h2>
                        <p class="mt-2 text-sm text-gray-600">
                            Or
                            <router-link
                                :to="{ name: 'login' }"
                                class="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </router-link>
                        </p>
                    </div>

                    <div class="mt-8">
                        <div>
                            <div class="mt-6">
                                <form
                                    @submit.prevent="onSubmit"
                                    @reset="onReset"
                                    class="space-y-6"
                                >
                                    <div>
                                        <label
                                            for="name"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Name
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                v-model="form.name"
                                                id="name"
                                                name="name"
                                                type="text"
                                                autocomplete="name"
                                                placeholder="Enter Name"
                                                required
                                                :state="errors && !errors.name"
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label
                                            for="email"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Email address
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                v-model="form.email"
                                                id="email"
                                                name="email"
                                                type="email"
                                                autocomplete="email"
                                                placeholder="Enter email"
                                                :state="errors && !errors.email"
                                                required
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div class="space-y-1">
                                        <label
                                            for="password"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                v-model="form.password"
                                                id="password"
                                                name="password"
                                                type="password"
                                                placeholder="Enter password"
                                                required
                                                :state="
                                                    errors && !errors.password
                                                "
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div class="space-y-1">
                                        <label
                                            for="password_confirmation"
                                            class="block text-sm font-medium text-gray-700"
                                        >
                                            Password
                                        </label>
                                        <div class="mt-1">
                                            <input
                                                v-model="
                                                    form.password_confirmation
                                                "
                                                id="password_confirmation"
                                                name="password_confirmation"
                                                placeholder="Confirm password"
                                                type="password_confirmation"
                                                autocomplete="password_confirmation"
                                                required
                                                :state="
                                                    errors &&
                                                    !errors.password_confirmation
                                                "
                                                class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>

                                    <div class="flex gap-2">
                                        <button
                                            type="submit"
                                            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Sign in
                                        </button>
                                        <button
                                            type="reset"
                                            class="w-full flex justify-center py-2 px-4 border rounded-md shadow-sm text-sm font-medium hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            Reset
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="flex-1 ml-4">
                    <img
                        class="w-96 h-96 object-cover rounded overflow-hidden"
                        src="https://hdwallpapers.cat/wallpaper/pets-collage-image-cute-animals-8vEe.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            form: {
                email: "",
                name: "",
                password: "",
                password_confirmation: "",
            },
            errors: null,
        };
    },
    components: {},
    methods: {
        onSubmit(event) {
            event.preventDefault();
            axios.get("http://localhost:8000/sanctum/csrf-cookie").then(() => {
                axios
                    .post("/register", {
                        ...this.form,
                    })
                    .then(() => {
                        this.$router.push("/");
                    })
                    .catch((err) => {
                        this.errors = err.response.data.errors;
                    });
            });
        },
        onReset(event) {
            event.preventDefault();
            // Reset our form values
            this.form.email = "";
            this.form.name = "";
            this.form.password = null;
            this.form.password_confirmation = null;
        },
    },
};
</script>

<style></style>
