export default class WearableData extends foundry.abstract.DataModel {
    
    static defineSchema() {
        const fields = foundry.data.fields;

        return { 
            description: new fields.HTMLField(),
            armor: new fields.HTMLField()
        }
    }
}