export type BlindBitUtxo = {
  txid: string;
  vout: number;
  amount: number;
  priv_key_tweak: string;
  pub_key: string;
  timestamp: number;
  utxo_state: utxoState;
  label: BlindBitUtxoLabel;
};

export type utxoState =
  | "unconfirmed"
  | "unspent"
  | "spent"
  | "unconfirmed_spent";

export interface BlindBitUtxoLabel {
  pub_key: string;
  tweak: string;
  address: string;
  m: number;
}
