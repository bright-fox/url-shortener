import { Injectable } from '@nestjs/common';
import { CreateUrlDto } from './dto/create-url.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Url } from './entities/url.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UrlService {
  constructor(
    @InjectRepository(Url)
    private urlRepo: Repository<Url>
  ) {}

  create(createUrlDto: CreateUrlDto) {
    return 'This action adds a new url';
  }

  findOne(id: number) {
    return `This action returns a #${id} url`;
  }
}
