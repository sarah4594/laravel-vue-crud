<template>
    <div class="container">
        <ProtectedNavigation />
        <router-view></router-view>
    </div>
</template>
<script>
import ProtectedNavigation from "../components/ProtectedNavigation.vue";
export default { components: { ProtectedNavigation } };
</script>
