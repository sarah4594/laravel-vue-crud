import List from "../pages/patients/List.vue";
import Create from "../pages/patients/Create.vue";
import Edit from "../pages/patients/Edit.vue";
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
