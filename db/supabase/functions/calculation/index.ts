// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7'


const supabase = createClient(Deno.env.get("SUPABASE_URL")!,Deno.env.get("SUPABASE_ANON_KEY")!)

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  }
Deno.serve(async (req) => {
  const {data,error} = await supabase.from("calculated").select("*").eq("id",1)
  let resp= {}
  if (error) {
    console.log("Error getting name",error)
    resp = {
      message: `Error getting name: ${error.message}`
    }
  } else {
    console.log("data:",data)
    resp = {
      message: data[0].calculation
    }
  }
  

  return new Response(
    JSON.stringify(resp),
    { headers: {...corsHeaders, "Content-Type": "application/json" } },
  )
})

