import { corsHeaders } from '../_shared/cors.ts'

import { Hono } from 'https://deno.land/x/hono/mod.ts'
import { cors } from 'https://deno.land/x/hono/middleware.ts'
import type { Context } from 'https://deno.land/x/hono/mod.ts'
import { jwt } from 'https://deno.land/x/hono/middleware.ts'
const secret = Deno.env.get('PUBLIC_JWT_SECRET');
const anon_key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

console.log("secret:",secret)
console.log("anon_key:",anon_key)
const app = new Hono()
app.use(`*`,cors())
app.use(`*`,jwt({
  secret: secret!
}))

app.post('/hono', async (c: Context) =>{
  // console.log(c)
  const payload = c.get('jwtPayload')
  console.log("payload:",payload)
  let resp = {
    authenticated: false,
    userMail : ""
  }
  if (payload){
    resp.authenticated = payload.role === "authenticated"
    resp.userMail = payload.email
  }
  const body = await c.req.json()
  console.log("body:",body)
  
  // return c.body({message:`Hello ${name}!`})
  return c.json({message:`Hello`,...resp})
})

Deno.serve(app.fetch)


