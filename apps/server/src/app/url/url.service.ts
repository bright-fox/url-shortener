import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';
import moment from 'moment';
import { nanoid } from 'nanoid';
import { UrlMapping } from '@url-shortener/server-interfaces';

@Injectable()
export class UrlService {
  private EXPIRATION_TIME_MIN = 30;

  @InjectRepository(Url)
  private urlRepo: Repository<Url>;

  async create(
    createUrlDto: CreateUrlDto
  ): Promise<Pick<UrlMapping, 'shortUrl'>> {
    const { fullUrl } = createUrlDto;
    const existingUrlMapping = await this.urlRepo.findOne({
      where: { fullUrl },
    });
    if (existingUrlMapping) {
      return { shortUrl: existingUrlMapping.shortUrl };
    }

    const expirationDate = moment(new Date())
      .add(this.EXPIRATION_TIME_MIN, 'm')
      .toDate();
    const urlMapping = this.urlRepo.create({
      fullUrl: createUrlDto.fullUrl,
      shortUrl: nanoid(),
      expiresAt: expirationDate,
    });
    await this.urlRepo.save(urlMapping);
    return { shortUrl: urlMapping.shortUrl };
  }

  findOne(shortUrl: string) {
    return this.urlRepo.findOne({
      where: { shortUrl },
    });
  }
}
