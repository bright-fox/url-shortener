import { UrlMapping } from '@url-shortener/server-interfaces';

export class Url implements UrlMapping {
  id: number;
  fullUrl: string;
  shortUrl: string;
  expiresAt: Date;
}
