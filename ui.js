class Ui {
    constructor() {
        this.results = document.querySelector('.results');
        this.armorPieces = document.querySelector('.pieces');
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

const mh = new MhApi();
const ui = new Ui();

mh.getAilments()
.then(data => {
    console.log(data.ailments);
    // ui.showArmorPieces(data.armorSet.pieces);
})
.catch(error => {
    console.log(error.status);
})