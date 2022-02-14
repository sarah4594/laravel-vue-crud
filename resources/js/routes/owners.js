import ListOwners from "../pages/owners/ListOwners.vue";
import CreateOwner from "../pages/owners/CreateOwner.vue";
import EditOwner from "../pages/owners/EditOwner.vue";
import defineRoutes from "./defineRoutes";

export default function (basePath) {
    return defineRoutes(basePath, [
        {
            name: "list",
            path: "/",
            component: ListOwners,
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
