type State = Readonly<{
  name: string;
  type: string
  ownerNameSnapshot: string | null;
}>

export type {
  State as PetState,
}
