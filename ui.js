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

            let imageNameToLower = ailment.name.toLowerCase(),
                seoImageUrl = imageNameToLower.replace(' ', '-');


            output += `
                <li class="page__result">
                    <img src="blights/${seoImageUrl}.svg" alt="">
                    <h2 data-ailment-id="${ailment.id}" class="title">${ailment.name}</h2>
                    <div class="content">
                        <p>${ailment.description}</p>
                    </div>
                    <button class="button">View Details</button>
                </li>
            `;
        });



        this.results.innerHTML = output;

    }
//
//     ${ailment.recovery.actions.length > 0 ? `<h4>Recovery Actions</h4><ul class="info">${recoverActions}</ul>` : ''}
// ${ailment.recovery.items.length > 0 ? `<h4>Recovery Items</h4><ul class="info">${recoverItems}</ul>` : ''}
// ${ailment.protection.items.length > 0 ? `<h4>Protection Items</h4><ul class="info">${protectionItems}</ul>` : ''}
// ${ailment.protection.skills.length > 0 ? `<h4>Protection Skills</h4><ul class="info">${protectionSkills}</ul>` : ''}

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