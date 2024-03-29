import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { redirect } from 'next/dist/server/api-utils'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID||'',
            clientSecret: process.env.GOOGLE_SECRET||''
        }),
        // ...add more providers here
    ],
    // A database is optional, but required to persist accounts in a database
    // database: process.env.DATABASE_URL,
})

