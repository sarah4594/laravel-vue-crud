import AllOwners from "../components/owners/AllOwners.vue";
import CreateOwner from "../components/owners/CreateOwner.vue";
import EditOwner from "../components/owners/EditOwner.vue";
import defineRoutes from "./defineRoutes";

export default function (basePath) {
    return defineRoutes(basePath, [
        {
            name: "list",
            path: "/",
            component: AllOwners,
        },
        {
            name: "create",
            path: "/create",
            component: CreateOwner,
        },
        {
            name: "edit",
            path: "/edit/:id",
            component: EditOwner,
        },
    ]);
}
