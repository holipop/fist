export default class ItemData extends foundry.abstract.DataModel {
    
    static defineSchema() {
        const fields = foundry.data.fields;

        return { 
            description: new fields.HTMLField(),
            damage: new fields.StringField(),
        }
    }
}