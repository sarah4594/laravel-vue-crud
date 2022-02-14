<template>
    <div>
        <h2>Registration</h2>
        <form @submit="onSubmit" @reset="onReset">
            <div class="w-96 flex flex-col gap-4 mt-8">
                <div>
                    <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                        >Name</label
                    >
                    <input
                        id="name"
                        name-="name"
                        v-model="form.name"
                        type="text"
                        placeholder="Enter name"
                        :state="errors && !errors.name"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label
                        for="email"
                        class="block text-sm font-medium text-gray-700"
                        >Email</label
                    >
                    <input
                        id="email"
                        name-="email"
                        v-model="form.email"
                        type="text"
                        placeholder="Enter email"
                        :state="errors && !errors.email"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label
                        for="password"
                        class="block text-sm font-medium text-gray-700"
                        >Password</label
                    >
                    <input
                        id="password"
                        name-="password"
                        v-model="form.password"
                        type="text"
                        placeholder="Enter password"
                        :state="errors && !errors.password"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
                <div>
                    <label
                        for="name"
                        class="block text-sm font-medium text-gray-700"
                        >Confirm Password</label
                    >
                    <input
                        id="password_confirmation"
                        name="password_confirmation"
                        v-model="form.password_confirmation"
                        type="text"
                        placeholder="Confirm Password"
                        :state="errors && !errors.password_confirmation"
                        class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                </div>
            </div>
            <div class="flex gap-4">
                <button
                    type="submit"
                    class="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded text-white mt-8"
                >
                    Register
                </button>
                <button
                    type="reset"
                    class="px-4 py-2 bg-white hover:bg-gray-100 rounded text-gray-800 mt-8 border"
                >
                    Reset
                </button>
            </div>
        </form>
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
