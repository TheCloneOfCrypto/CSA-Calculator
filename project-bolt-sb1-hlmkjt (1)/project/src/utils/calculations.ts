// Calculate Cross-Sectional Area (CSA) of the valve
export const calculateCSA = (valveDiameter: number, liftHeight: number): number => {
  const radius = valveDiameter / 2;
  // CSA = π × diameter × lift
  return Math.PI * valveDiameter * liftHeight;
};

// Calculate Mean Gas Velocity (MGV)
export const calculateMGV = (cfm: number, csa: number): number => {
  // Convert CSA to square feet
  const csaInSqFt = csa / 144;
  // MGV = CFM / CSA (in ft/sec)
  return cfm / (csaInSqFt * 60);
};

// Calculate Cylinder Head Taper Angle
export const calculateTaper = (portDiameter: number, valveDiameter: number): number => {
  // Simple taper calculation based on diameter difference
  // Assuming a standard port length of 4 inches
  const standardPortLength = 4;
  const radiusDifference = (portDiameter - valveDiameter) / 2;
  // Calculate angle in degrees
  return Math.atan(radiusDifference / standardPortLength) * (180 / Math.PI);
};