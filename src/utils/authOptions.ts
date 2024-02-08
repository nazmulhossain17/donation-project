import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
    providers: [
        CredentialsProvider({
          id: "donation",
          name: "Credentials",
          type: "credentials",
             credentials: {
            email: { label: "email", type: "email", placeholder: "jsmith@gmail.com" },
            password: { label: "Password", type: "password" }
          },

          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
            const res = await fetch(`${process.env.BACKEND_URL}/api/auth/`, {
                method: "POST",
                body: JSON.stringify(credentials),
                headers: {"Content-Type": "application/json"},
            });
            const user = await res.json()
            console.log(user)
            if(res.ok && user){
                return user;
            }

            return null
          }
        })
      ]
}
