window.addEventListener("load", function( ) {

    elements.zirconium = {
        color: "#cfcfcf",
        behavior: behaviors.SOLID,
        category: "solids",
        tempHigh: 1855,
        stateHigh: "molten_zirconium",
        density: 6510,
        conduct: 0.23,
        reactions: {
            "water": {
                elem1: "zirconium_oxide",
                elem2: "hydrogen",
                chance: 0.01,
                tempMin: 1000,
            },
            "graphite": {
                elem1: "zirconium_carbide_graphite",
                elem2: null,
                chance: 0.01,
                tempMin: 1000
            }
        }
    };

    elements.zirconium_oxide = {
        color: "#faf9f6",
        behavior: behaviors.POWDER,
        category: "powders",
        tempHigh: 2715,
        stateHigh: "molten_zirconium_oxide",
        density: 5680,
        conduct: 0
    };

    elements.zirconium_carbide_graphite = {
        color: "#2b2d30",
        behavior: behaviors.SOLID,
        category: "solids",
        tempHigh: 2875,
        stateHigh: "molten_zirconium_carbide_graphite",
        density: 5600,
        conduct: 0.8
    };

    elements.molten_zirconium_carbide_graphite = {
        color: "#f0f8ff",
        behavior: behaviors.LIQUID,
        category: "states",
        tempHigh: 3600,
        stateHigh: "zirconium_gas_mixture",
        tempLow: 2874,
        stateLow: "zirconium_carbide_graphite",
        density: 5200,
        conduct: 0.15
    };

    elements.zirconium_gas_mixture = {
        color: "#f0ffff",
        behavior: behaviors.GAS,
        category: "gases",
        tempLow: 3599,
        stateLow: "molten_zirconium_carbide_graphite",
        density: 2500,
        conduct: 0.06,
        reactions: {
            "fire": {
                elem1: "zirconium_oxide",
                elem2: "carbon_dioxide",
                chance: 0.05,
                tempMin: 800
            }
        }
    };

    elements.molten_zirconium = {
        color: "#fff4e5",
        behavior: behaviors.LIQUID,
        category: "states",
        tempLow: 1854,
        stateLow: "zirconium",
        density: 5800,
        conduct: 0.15
    };

    elements.graphite = {
        color: "#2f2f2f",
        behavior: behaviors.SOLID,
        category: "solids",
        tempHigh: 2800,
        stateHigh: "carbon_dioxide",
        density: 2260,
        conduct: 0.8
};

    elements.molten_zirconium_oxide = {
        color: "#faf9f6",
        behavior: behaviors.LIQUID,
        category: "states",
        tempLow: 2714,
        stateLow: "zirconium_oxide",
        density: 4740,
        conduct: 0.28
    };
});
