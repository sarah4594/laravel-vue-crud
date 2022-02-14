import List from "../pages/owners/List.vue";
import Create from "../pages/owners/Create.vue";
import Edit from "../pages/owners/Edit.vue";
import defineRoutes from "./defineRoutes";

export default function (basePath) {
    return defineRoutes(basePath, [
        {
            name: "list",
            path: "/",
            component: List,
        },
        {
            name: "create",
            path: "/create",
            component: Create,
        },
        {
            name: "edit",
            path: "/edit/:id",
            component: Edit,
        },
    ]);
}
