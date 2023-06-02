export default class TraitData extends foundry.abstract.DataModel {

    static defineSchema() {
        const fields = foundry.data.fields;

        return { 
            description: new fields.HTMLField(),
            attribute: new fields.StringField(),
            bonus: new fields.NumberField(),
        }
    }
}