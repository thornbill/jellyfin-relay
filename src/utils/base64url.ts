/**
 * Decodes Base64URL encoded strings.
 * @see https://datatracker.ietf.org/doc/html/rfc4648#section-5
 */
export function decode(urlEncoded: string) {
    const encoded = urlEncoded
        .replace(/-/g, '+')
        .replace(/_/g, '/');

  return atob(encoded);
}

/**
 * Encodes a string as Base64URL.
 * @see https://datatracker.ietf.org/doc/html/rfc4648#section-5
 */
export function encode(data: string) {
    return btoa(data)
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}
