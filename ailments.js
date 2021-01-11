class Ailments {
    constructor() {
    }

    getRecoveryActions(actions) {
        let ailmentAction = '';

        actions.forEach(action => {

            ailmentAction += `
                <li>
                    <p><strong>Action:</strong> ${action}</p>
                </li>
            `;
        });

        return ailmentAction;
    }

    getRecoveryItems(items) {
        let ailmentRecoveryItem = '';

        items.forEach(item => {
            ailmentRecoveryItem += `
                <li>
                    <p><strong>Name:</strong> ${item.name}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Rarity:</strong> ${item.rarity}</p>
                    <p><strong>Value:</strong> ${item.value}z</p>
                    <p><strong>Carry Limit:</strong> ${item.carryLimit}</p>
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
                    <p><strong>Name:</strong> ${item.name}</p>
                    <p><strong>Description:</strong> ${item.description}</p>
                    <p><strong>Rarity:</strong> ${item.rarity}</p>
                    <p><strong>Value:</strong> ${item.value}z</p>
                    <p><strong>Carry Limit:</strong> ${item.carryLimit}</p>
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
                    <p><strong>Name:</strong> ${skill.name}</p>
                    <p><strong>Description:</strong> ${skill.description}</p>
                </li>
            `;
        });



        return ailmentProtectionSkills;
    }


}