export default class MercenarySheet extends ActorSheet {

    static get defaultOptions() {
        return mergeObject(super.defaultOptions, {
            classes: ["first", "sheet", "actor"],
            template: 'systems/fist/templates/mercenary.hbs'
        });
    }

    async getData() {
        const data = super.getData();

        return data;
    }
}