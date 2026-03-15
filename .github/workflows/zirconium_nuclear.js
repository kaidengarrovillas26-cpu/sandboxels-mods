// Zirconium Nuclear Properties Mod for Sandboxels

// Main Zirconium Element
elements.zirconium = {
    color: "#b8b8c0",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 6511,
    tempHigh: 1855,
    stateHigh: "molten_zirconium",

    // Nuclear properties
    atomicNumber: 40,
    atomicMass: 91.224,
    neutrons: 51,
    protons: 40,
    electrons: 40,

    // Radiation behavior
    radiation: 0,
    radioactive: false,

    conduct: 0.2,
    hardness: 0.6,

    reactions: {
        "water": {elem1:"zirconium_oxide", elem2:"hydrogen", tempMin:800}
    }
};

// Molten Zirconium
elements.molten_zirconium = {
    color: "#e6e6ff",
    behavior: behaviors.LIQUID,
    category: "liquids",
    state: "liquid",
    density: 5800,
    temp: 1855,
    tempLow: 1854,
    stateLow: "zirconium",

    atomicNumber: 40,
    radiation: 0
};

// Zirconium Isotopes
elements.zr90 = {
    color: "#c0c0c8",
    behavior: behaviors.POWDER,
    category: "nuclear",
    state: "solid",
    density: 6500,

    atomicNumber: 40,
    massNumber: 90,
    neutrons: 50,
    stable: true,
    radiation: 0
};

elements.zr91 = {
    color: "#c0c0c8",
    behavior: behaviors.POWDER,
    category: "nuclear",
    state: "solid",

    atomicNumber: 40,
    massNumber: 91,
    neutrons: 51,
    stable: true,
    radiation: 0
};

elements.zr92 = {
    color: "#c0c0c8",
    behavior: behaviors.POWDER,
    category: "nuclear",
    state: "solid",

    atomicNumber: 40,
    massNumber: 92,
    neutrons: 52,
    stable: true,
    radiation: 0
};

elements.zr94 = {
    color: "#c0c0c8",
    behavior: behaviors.POWDER,
    category: "nuclear",
    state: "solid",

    atomicNumber: 40,
    massNumber: 94,
    neutrons: 54,
    stable: true,
    radiation: 0
};

elements.zr96 = {
    color: "#c0c0c8",
    behavior: behaviors.POWDER,
    category: "nuclear",
    state: "solid",

    atomicNumber: 40,
    massNumber: 96,
    neutrons: 56,
    stable: false,
    radioactive: true,
    radiation: 0.0001,
    halfLife: 2.0e19
};

// Zirconium Oxide (ZrO2)
elements.zirconium_oxide = {
    color: "#e8e8e8",
    behavior: behaviors.POWDER,
    category: "solids",
    state: "solid",
    density: 5680,
    tempHigh: 2700,
    radiation: 0
};
