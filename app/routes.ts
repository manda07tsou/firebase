import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    layout("./routes/admin/_layout.tsx",
        [
            route("/admin", "routes/admin/dashboard.tsx"),
            route("/admin/test", "routes/admin/test.tsx")
        ]
    )
] satisfies RouteConfig;
