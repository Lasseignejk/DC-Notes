[Environment Variables](https://next-auth.js.org/configuration/options#environment-variables)

## NEXTAUTH_URL
when deploying to production, set the `NEXTAUTH_URL` variable to the canonical URL of your site. 

## NEXTAUTH_SECRET
Used to encrypt JWTs and to hash email verification tokens. This is the default value for the `secret` option in NextAuth and Middleware.

To create a secret, you can use this: 

    openssl rand -base64 32