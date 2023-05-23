import { UrlMapping } from '@url-shortener/server-interfaces';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url implements UrlMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  fullUrl: string;

  @Column({ type: 'varchar', length: 255 })
  shortUrl: string;

  @Column({ type: 'datetime' })
  expiresAt: Date;
}
