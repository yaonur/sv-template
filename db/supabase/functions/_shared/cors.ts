const allowedOrigins = ['http://127.0.0.1:5173','http://localhost:5173'];

// Function to generate CORS headers based on the request's origin
export function generateCorsHeaders(requestOrigin:string) {
    let headers: {
        'Access-Control-Allow-Methods': string;
        'Access-Control-Allow-Headers': string;
        'Access-Control-Allow-Origin'?: string; // Optional property
    } = {
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': '*',
    };;

    // Check if the request's origin is in the allowed list and set the ACAO header accordingly
    if (allowedOrigins.includes(requestOrigin)) {
        headers['Access-Control-Allow-Origin'] = requestOrigin;
    }

    return headers;
}
export const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  }
