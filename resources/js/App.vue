<template>
    <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse">
                <div class="navbar-nav">
                    <router-link
                        :to="{ name: 'owners:list' }"
                        class="nav-item nav-link"
                        >Owners</router-link
                    >
                    <router-link
                        :to="{ name: 'patients:list' }"
                        class="nav-item nav-link"
                        >Patients</router-link
                    >
                </div>
            </div>
        </nav>
        <router-view> </router-view>
    </div>
</template>

<script>
export default {};
</script>
