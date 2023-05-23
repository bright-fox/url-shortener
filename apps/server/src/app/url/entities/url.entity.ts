import { UrlMapping } from '@url-shortener/server-interfaces';
import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Url implements UrlMapping {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column({ type: 'varchar', length: 255 })
  fullUrl: string;

  @Index({ unique: true })
  @Column({ type: 'varchar', length: 255 })
  shortUrl: string;

  @Column({ type: 'datetime' })
  expiresAt: Date;
}
