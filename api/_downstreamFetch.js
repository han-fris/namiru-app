const apiUrls = {
  creators:
    'https://script.google.com/macros/s/AKfycbyd-W_HSWBAf0cJAUOyWPe9EJ_f18FQ0WIx8k3It8jsbUvReVzU5WN1DlT5AC6eimjN/exec',
  blogposts:
    'https://script.google.com/macros/s/AKfycbzJzpW-l-ZVTME7wGhwqfd0QsPe3BLn5jBNlQ3RLtHxABBO51CIUV93IT8nHNfxXgg/exec',
};

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
