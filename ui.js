class Ui {
    constructor(results) {
        this.results = document.querySelector(results);
        // this.armorPieces = document.querySelector('.pieces');
    }

    displayAilments(ailments) {
        let output = '';

        ailments.forEach(ailment => {
            const ailments = new Ailments();

            let recoverActions = ailments.getRecoveryActions(ailment.recovery.actions),
                recoverItems = ailments.getRecoveryItems(ailment.recovery.items),
                protectionItems = ailments.getProtectionItems(ailment.protection.items),
                protectionSkills = ailments.getProtectionSkills(ailment.protection.skills);

            output += `
                <li>
                    <button  class="title">${ailment.name}</button>
                    <div class="content">
                        <p>${ailment.description}</p>
                        ${ailment.recovery.actions.length > 0 ? `<ul>${recoverActions}</ul>` : ''}
                        ${ailment.recovery.items.length > 0 ? `<ul>${recoverItems}</ul>` : ''}
                        ${ailment.protection.items.length > 0 ? `<ul>${protectionItems}</ul>` : ''}
                        ${ailment.protection.skills.length > 0 ? `<ul>${protectionSkills}</ul>` : ''}
                    </div>
                </li>
            `;
        });

        this.results.innerHTML = output;

    }

    armourFullSet(armorSet) {
        this.results.innerHTML = `
            <ul>
                <li>${armorSet.name}</li>
            </ul>   
        `;
    }

    showArmorPieces(armorPieces) {
        let output = '';

        armorPieces.forEach(armorPiece => {
            output += `
                <ul>
                    <li>Name: ${armorPiece.name}</li>
                    <li>Type: ${armorPiece.type}</li>
                    <li>Rarity: ${armorPiece.rarity}</li>
                    <li>Fire: ${armorPiece.resistances.fire}</li>
                    <li>Base: ${armorPiece.defense.base}</li>
                    <li>Max: ${armorPiece.defense.max}</li>
                    <li>Augmented: ${armorPiece.defense.augmented}</li>
                    <li>Male: <img src=${armorPiece.assets.imageMale} alt=""></li>
                    <li>Female: <img src=${armorPiece.assets.imageFemale} alt=""></li>
                </ul>  
            `;
        });

        this.armorPieces.innerHTML = output;
    }
}

// mh.getAilments()
// .then(data => {
//     console.log(data.ailments);
//     // ui.showArmorPieces(data.armorSet.pieces);
// })
// .catch(error => {
//     console.log(error.status);
// })