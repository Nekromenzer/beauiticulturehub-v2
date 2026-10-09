export function GET() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID;
  if (!clientId || !/^ca-pub-\d+$/.test(clientId)) {
    return new Response(null, { status: 404 });
  }

  return new Response(
    `google.com, ${clientId.slice(3)}, DIRECT, f08c47fec0942fa0\n`,
    { headers: { "Content-Type": "text/plain; charset=utf-8" } }
  );
}
