import { Metadata } from "next";
import LoginForm from "./page.client";

export const metadata: Metadata = {
    title: 'Login',
    description: 'Please log in to continue.',
}

export default function LoginPage() {
    return (
        <LoginForm/>
    )
}