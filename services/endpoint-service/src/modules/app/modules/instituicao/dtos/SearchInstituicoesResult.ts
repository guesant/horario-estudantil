import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Hits, SearchResponse } from 'meilisearch';
import { InstituicaoEntity } from '../../../entities/instituicao.entity';

@ObjectType('SearchInstituicoesResult')
export class SearchInstituicoesResult
  implements
    Omit<
      SearchResponse<Record<string, InstituicaoEntity>>,
      'query' | 'processingTimeMs' | 'facetDistribution'
    >
{
  @Field(() => Int)
  estimatedTotalHits!: number;

  @Field(() => [InstituicaoEntity])
  hits!: Hits<Record<string, InstituicaoEntity>>;

  @Field(() => Int)
  limit!: number;

  @Field(() => Int)
  offset!: number;

  // facetDistribution!: FacetDistribution;
  // processingTimeMs!: number;
  // query!: string;
}
