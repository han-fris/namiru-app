import { apiUrls } from '../global.config.js';

export async function downstreamFetch(dataType, request) {
  if (!dataType || !apiUrls[dataType]) {
    return Response.json(
      { error: 'Invalid or missing data type' },
      { status: 500 }
    );
  }
  const url = new URL(request.url);
  const id = url.searchParams.get('id');
  const row = url.searchParams.get('row');

  const downstreamUrl = new URL(apiUrls[dataType]);
  if (id) {
    downstreamUrl.searchParams.set('id', id);
  }
  if (row) {
    downstreamUrl.searchParams.set('row', row);
  }
  console.debug(`Fetching data for ${dataType} (${downstreamUrl})`);

  const downstreamResponse = await fetch(downstreamUrl, {
    redirect: 'follow',
  });
  if (downstreamResponse.ok) {
    return new Response(downstreamResponse.body, {
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control':
          'max-age=60, s-maxage=120, stale-while-revalidate=3600',
      },
    });
  }
  console.error(
    `Failed to fetch data for ${dataType}: ${downstreamResponse.statusText}`
  );
  console.error(await downstreamResponse.text());
  return new Response.json(
    { error: `Failed to fetch data (${downstreamResponse.statusText})` },
    { status: 500 }
  );
}
