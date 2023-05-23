import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';
import moment from 'moment';
import { nanoid } from 'nanoid';

@Injectable()
export class UrlService {
  private EXPIRATION_TIME_MIN = 30;

  @InjectRepository(Url)
  private urlRepo: Repository<Url>;

  create(createUrlDto: CreateUrlDto) {
    const expirationDate = moment(new Date())
      .add(this.EXPIRATION_TIME_MIN, 'm')
      .toDate();
    const urlMapping = this.urlRepo.create({
      fullUrl: createUrlDto.fullUrl,
      shortUrl: nanoid(),
      expiresAt: expirationDate,
    });
    return this.urlRepo.save(urlMapping);
  }

  //   findOne(shortUrl: string) {}
}
