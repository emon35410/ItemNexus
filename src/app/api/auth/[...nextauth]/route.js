import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: "Mock Login",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
                name: { label: "Name", type: "text" } 
            },
            async authorize(credentials) {

                const nameFromForm = credentials?.name;
                const emailFromForm = credentials?.email;

                if (emailFromForm) {
                    return {
                        id: "1",
                        name: nameFromForm || "Unknown User", 
                        email: emailFromForm
                    };
                }
                return null;
            },
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.name = user.name;
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user.name = token.name;
            }
            return session;
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/products`;
        },
    },
    pages: {
        signIn: "/login",
    },
    secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };