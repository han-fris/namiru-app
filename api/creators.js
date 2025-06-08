import { downstreamFetch } from './_downstreamFetch.js';

export async function GET(request) {
  return downstreamFetch('creators', request);
}
