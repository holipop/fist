export default class ItemData extends foundry.abstract.DataModel {
    
    static defineSchema() {
        const fields = foundry.data.fields;

        return { 
            description: new fields.HTMLField(),
            replenishable: new fields.BooleanField(),
            uses: new fields.NumberField(),
        }
    }
}