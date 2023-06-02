export default class MercenaryData extends foundry.abstract.DataModel {

    static defineSchema() {
        const fields = foundry.data.fields;

        return {
            hp: new fields.SchemaField({
                value: new fields.NumberField(),
                max: new fields.NumberField()
            }),
            armor: new fields.NumberField(),
            warDice: new fields.NumberField(),
            attributes: new fields.SchemaField({ 
                forceful: new fields.NumberField(),
                tactical: new fields.NumberField(),
                creative: new fields.NumberField(),
                reflexive: new fields.NumberField()
            }),

            role: new fields.StringField(),
            pronouns: new fields.HTMLField(),
            biography: new fields.HTMLField(),
            transcript: new fields.HTMLField(),
        }
    }
}