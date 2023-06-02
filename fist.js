import MercenaryData from "./module/actor/MercenaryData.js";
import MercenarySheet from "./module/sheets/MercenarySheet.js";
import { fist, F } from "./module/config.js";

Hooks.once('init', () => {
    console.log(`${F} | Initializiing FIST Ultra System.`);

    CONFIG.fist = fist;

    CONFIG.Actor.systemDataModels["Mercenary"] = MercenaryData;

    Actors.unregisterSheet("core", ActorSheet);
    Actors.registerSheet("animecampaign", MercenarySheet, { makeDefault: true });
})