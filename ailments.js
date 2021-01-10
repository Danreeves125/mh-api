class Ailments {
    constructor() {
    }

    getRecoveryActions(actions) {
        let ailmentAction = '';

        actions.forEach(action => {
            ailmentAction += `
                <li>${action}</li>
            `;
        });

        return ailmentAction;
    }

    getRecoveryItems(items) {
        let ailmentRecoveryItem = '';

        items.forEach(item => {
            ailmentRecoveryItem += `
                <li>
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                    <p>${item.rarity}</p>
                    <p>${item.value}</p>
                    <p>${item.carryLimit}</p>
                </li>
            `;
        });

        return ailmentRecoveryItem;
    }

    getProtectionItems(items) {
        let ailmentProtectionItem = '';

        items.forEach(item => {
            ailmentProtectionItem += `
                <li>
                    <p>${item.name}</p>
                    <p>${item.description}</p>
                    <p>${item.rarity}</p>
                    <p>${item.value}</p>
                    <p>${item.carryLimit}</p>
                </li>
            `;
        });

        return ailmentProtectionItem;
    }

    getProtectionSkills(skills) {
        let ailmentProtectionSkills = '';

        skills.forEach(skill => {
            ailmentProtectionSkills += `
                <li>
                    <p>${skill.name}</p>
                    <p>${skill.description}</p>
                </li>
            `;
        });



        return ailmentProtectionSkills;
    }


}