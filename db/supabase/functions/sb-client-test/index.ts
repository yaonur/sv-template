// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { createClient } from 'supabase'


const supabase = createClient(Deno.env.get("SUPABASE_URL")!,Deno.env.get("SUPABASE_ANON_KEY")!)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  }
Deno.serve(async (req) => {
  const {data:name,error} = await supabase.from("profiles").select("*")
  let data= {}
  if (error) {
    console.log("Error getting name",error)
    data = {
      message: `Error getting name: ${error.message}`
    }
  } else {
    console.log("name:",name)
    data = {
      name: name[0].name,
      message: `Hello!`,
      req: req
    }
  }
  

  return new Response(
    JSON.stringify(data),
    { headers: {...corsHeaders, "Content-Type": "application/json" } },
  )
})

