// Single source of truth for Artyk's business identity used in structured data
// (JSON-LD), sitemap, and metadata. Address mirrors the Contact page / Footer.
// TODO(client-verify): telephone, geo coordinates and logo asset.
export const org = {
  name: "Artyk India",
  url: "https://artykindia.com",
  address: {
    streetAddress: "Jubilee Hills",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500033",
    addressCountry: "IN",
  },
} as const;
