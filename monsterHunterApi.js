class MhApi {
    constructor() {

    }

    async getAilments(ailmentId = '') {
        const ailmentsResponse = await fetch(`https://mhw-db.com/ailments${ailmentId !== '' ? `/${ailmentId}` : ''}`);

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