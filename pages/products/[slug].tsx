import React from "react";
import { useRouter } from "next/router"

export default function product(params) {
    const router = useRouter()
    return (
        <h1>{router.query.slug}</h1>
    )
};
