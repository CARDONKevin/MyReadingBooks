import {MangaPresentationDto} from './MangaPresentationDto';

export interface MangaEdenApiResponseDto {
  end: number;
  manga: Array<MangaPresentationDto>;
  page: number;
  start: number;
  total: number;
}
