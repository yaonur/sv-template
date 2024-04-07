// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { generateCorsHeaders } from '../_shared/cors.ts';

Deno.serve(async (req) => {
    // Extract the Origin header from the incoming request
    // console.log("request:",req)
    const requestOrigin = req.headers.get("Origin");
    // console.log("requestOrigin:",requestOrigin)
    // Generate CORS headers for the current request's origin
    const corsHeaders = generateCorsHeaders(requestOrigin!);
    // console.log("generated corsHeaders:", corsHeaders);

    // Handle preflight (OPTIONS) requests
    if (req.method === 'OPTIONS') {
        return new Response(null, { headers: new Headers(corsHeaders) });
    }

    try {
        const { name } = await req.json();
        const data = {
            message: `Hello ${name}!`,
            name
        };

        return new Response(JSON.stringify(data), {
            headers: new Headers({ ...corsHeaders, 'Content-Type': 'application/json' }),
            status: 200,
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            headers: new Headers({ ...corsHeaders, 'Content-Type': 'application/json' }),
            status: 400,
        });
    }
});


