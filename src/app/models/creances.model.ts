interface Creance {
  id?: number;
  name?: string;
  creancetype?: CreanceType;
  formFieldsJSON?: string;

}

enum CreanceType {
  FACTURE = 'FACTURE',
  DONNATION = 'DONNATION',
  RECHARGE = 'RECHARGE'
}

export { Creance, CreanceType };
