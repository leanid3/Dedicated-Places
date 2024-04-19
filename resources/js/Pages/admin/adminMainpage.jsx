import AdminLayout from "@/Layouts/AdminLayout";
import React from "react";

export default function AdminMainpage({auth}) {
console.log(auth)
    return <AdminLayout user={auth}>adminMainpage</AdminLayout>;
}
