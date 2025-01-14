import * as beet from '@metaplex-foundation/beet';
export enum MarketState {
  Uninitialized,
  Created,
  Active,
  Ended,
}
export const marketStateEnum = beet.fixedScalarEnum(MarketState) as beet.FixedSizeBeet<
  MarketState,
  MarketState
>;
