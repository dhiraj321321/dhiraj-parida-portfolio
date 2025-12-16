import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "Dhiraj Parida",
    description: "Dhiraj Parida • Java Developer • Spring Boot • REST APIs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>{children}</body>
        </html>
    );
}
