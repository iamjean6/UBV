export const POSITION_MAP = {
  // Abbreviation -> Full name
  PG: 'Point Guard',
  SG: 'Shooting Guard',
  SF: 'Small Forward',
  PF: 'Power Forward',
  C: 'Center',

  // Full name -> Full name (passthrough for already-expanded values)
  'POINT GUARD': 'Point Guard',
  'SHOOTING GUARD': 'Shooting Guard',
  'SMALL FORWARD': 'Small Forward',
  'POWER FORWARD': 'Power Forward',
  CENTER: 'Center',

  // Common combined positions
  'PG/SG': 'Point Guard / Shooting Guard',
  'SG/SF': 'Shooting Guard / Small Forward',
  'SF/PF': 'Small Forward / Power Forward',
  'PF/C': 'Power Forward / Center',
};
