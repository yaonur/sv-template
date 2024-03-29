// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

const url = Deno.env.get('SUPABASE_URL');
const service_key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');
const anon_key = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

const supabase = createClient(url!, anon_key!);

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Headers': '*'
};
Deno.serve(async (req) => {
	let target_user_id;
	let calculationValue;
	let userId = true;
	let resp={};
	console.log('req:', req);
	console.log('service_key:', service_key);

	if (req.method === 'POST' && req.headers.get('content-type')?.includes('application/json')) {
		try {
			console.log('auth header:', req.headers.get('Authorization'));
			const authHeader = req.headers.get('Authorization');
			if (!authHeader) {
				console.log('no auth header found');
				return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
			}
			const body = await req.json();
			target_user_id = body.target_user_id;
			calculationValue = body.calculationValue;
			console.log('body:', body);
			const serviceSupabase = createClient(url!, service_key!);
      
			if (userId) {
				const { data: existingData, error: selectError } = await serviceSupabase
					.from('calculated')
					.select('*')
					.eq('id', target_user_id)
					.single();
				console.log('data from select:', existingData);
				if (selectError && selectError.details !== 'The result contains 0 rows') {
					console.error('-------Error fetching record:', selectError);
					return new Response(JSON.stringify({ error: selectError.message }), { status: 400 });
				}
				if (!existingData) {
          console.log("no existing data inserting:")
					const { data: insertData, error: insertError } = await serviceSupabase
						.from('calculated') // Replace with your actual table name
						.insert([{ id: target_user_id, value: 0 }]);
					resp = insertError
						? { error: insertError.message }
						: { message: 'Record inserted', data: insertData };
				} else {
          console.log("updating calculated data")
          console.log("incoming value:",calculationValue)
          console.log("existing value:",existingData.value)
					const newCalculatedValue = existingData.value + calculationValue;
          console.log("calculated value:",newCalculatedValue)
					const { data: updateData, error: updateError } = await supabase
						.from('calculated') // Replace with your actual table name
						.update({ value: newCalculatedValue })
						.eq('id', target_user_id);

            console.log("data after update:",updateData)
            console.log("error on update data:",updateError)
            resp.value = newCalculatedValue
				}
			}
		} catch (error) {
			console.error('Error parsing JSON:', error);
			return new Response(JSON.stringify({ error: 'Bad Request' }), { status: 400 });
		}
	}

	console.log('User ID:', userId);

	return new Response(JSON.stringify({ ...resp }), {
		headers: { ...corsHeaders, 'Content-Type': 'application/json' }
	});
});
