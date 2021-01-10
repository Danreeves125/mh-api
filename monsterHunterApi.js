class MhApi {
    constructor() {

    }

    async getAilments() {
        const ailmentsResponse = await fetch(`https://mhw-db.com/ailments`);

        const ailmentsData = await ailmentsResponse.json();

        return {
            ailments: ailmentsData,
        }
    }

    async getFullArmorSet(armorId) {
        const armorSetResponse = await fetch(`https://mhw-db.com/armor/sets/${armorId}`);

        const armorSetData = await armorSetResponse.json();

        return {
            armorSet: armorSetData,
        }
    }
}