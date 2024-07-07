import CredentialsProvider  from "next-auth/providers/credentials";


export const authOptions = {
    session: {
        jwt: true,
        maxAge: 60, 
        updateAge: 30 
    },
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials):Promise<any> {
                console.log("under progress",credentials);
                const username = credentials?.username;
                const password=credentials?.password;
                const user = { id: 1,username,password}
                return  user
    },
        })
],
callbacks:{
    async jwt({token, user}:{token:any,user:any}) { 
        if(user){
            token.id=user.id
        token.username=user.username
        token.password=user.password    
        }
        return token
    },
    async session({session, token}:{session:any,token:any}) {
       session.user.id=token.id
        session.user.username=token.username
        session.user.password=token.password
        console.log(session);
        
        
        return session
    }
},
    secret:"abcdsc",
}