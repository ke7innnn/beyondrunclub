"use client";

import { useEffect } from "react";

export default function DynamicTitle() {
    useEffect(() => {
        const titles = ["BEYOND RUN CLUB", "START A RUN 🔥"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % titles.length;
            document.title = titles[index];
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return null;
}
