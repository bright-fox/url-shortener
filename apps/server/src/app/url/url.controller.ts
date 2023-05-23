import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
  Res,
} from '@nestjs/common';
import { UrlService } from './url.service';
import { CreateUrlDto } from './dto/create-url.dto';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

  @Post()
  create(@Body() createUrlDto: CreateUrlDto) {
    return this.urlService.create(createUrlDto);
  }

  @Get(':shortUrl')
  async findOne(@Param('shortUrl') shortUrl: string, @Res() res) {
    const urlMapping = await this.urlService.findOne(shortUrl);
    if (!urlMapping) {
      throw new NotFoundException(
        `No article found with the short ID ${shortUrl}`
      );
    }

    return res.redirect(urlMapping.fullUrl);
  }
}
