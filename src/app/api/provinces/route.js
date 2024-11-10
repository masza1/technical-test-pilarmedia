import axios from 'axios';

export async function GET() {
    try {
        // Making the request to the external API
        const response = await axios.get( 'https://emsifa.github.io/api-wilayah-indonesia/api/provinces.json' );

        
        // Send the data to the client
        return new Response( JSON.stringify( response.data ), {
            headers: { 'Content-Type': 'application/json' },
        } );
    } catch ( error ) {
        return new Response( JSON.stringify( { error: 'Failed to fetch data' } ), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        } );
    }
}
