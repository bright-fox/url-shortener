import { UrlMapping } from '@url-shortener/server-interfaces';

export class CreateUrlDto implements Pick<UrlMapping, 'fullUrl'> {
  fullUrl: string;
}
