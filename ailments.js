class Ailments {
    constructor(results) {
        this.results = document.querySelector(results);
        // this.armorPieces = document.querySelector('.pieces');
    }

    ailmentPopup(ailment) {
            let popupClose = `<button aria-label="Popup Close">Close</button>`;
            // clear any remaining alerts
            this.clearPopup();

            const popupOverlay = document.createElement('div');

            popupOverlay.className = 'popup-overlay';

            const popup = document.createElement('div');

            popup.className = 'popup';

            popup.innerHTML = this.displaySingleAilment(ailment);

            popupOverlay.appendChild(popup);

            const container = document.querySelector('body');

            const search = document.querySelector('.page');

            container.insertBefore(popupOverlay, search);

    }

    clearPopup() {
        const currentAlert = document.querySelector('.popup-overlay');

        if(currentAlert) {
            currentAlert.remove();
        }
    }

    displayAilments(ailments) {
        let output = '';

        ailments.forEach(ailment => {

            let recoverActions = this.getRecoveryActions(ailment.recovery.actions),
                recoverItems = this.getRecoveryItems(ailment.recovery.items),
                protectionItems = this.getProtectionItems(ailment.protection.items),
                protectionSkills = this.getProtectionSkills(ailment.protection.skills);

            let imageNameToLower = ailment.name.toLowerCase(),
                seoImageUrl = imageNameToLower.replace(' ', '-');


            output += `
                <li class="page__result">
                    <img src="blights/${seoImageUrl}.svg" alt="">
                    <h2 class="title">${ailment.name}</h2>
                    <div class="content">
                        <p>${ailment.description}</p>
                    </div>
                    <button class="button view-details" data-ailment-id="${ailment.id}">View Details</button>
                </li>
            `;
        });

        this.results.innerHTML = output;

    }

    displaySingleAilment(ailment) {
        let output = '';


        let recoverActions = this.getRecoveryActions(ailment.recovery.actions),
            recoverItems = this.getRecoveryItems(ailment.recovery.items),
            protectionItems = this.getProtectionItems(ailment.protection.items),
            protectionSkills = this.getProtectionSkills(ailment.protection.skills);

        let imageNameToLower = ailment.name.toLowerCase(),
            seoImageUrl = imageNameToLower.replace(' ', '-');


        output = `
            <button class="popup__close" aria-label="Close Popup">Close</button>
            <div class="popup__inner">
                <div class="popup__title"><img src="blights/${seoImageUrl}.svg" alt=""> ${ailment.name}</div>
                <div class="content">
                    <p>${ailment.description}</p>
                </div>
                ${ailment.recovery.actions.length > 0 ? `<h4>Recovery Actions</h4><ul class="info">${recoverActions}</ul>` : ''}
                ${ailment.recovery.items.length > 0 ? `<h4>Recovery Items</h4><ul class="info">${recoverItems}</ul>` : ''}
                ${ailment.protection.items.length > 0 ? `<h4>Protection Items</h4><ul class="info">${protectionItems}</ul>` : ''}
                ${ailment.protection.skills.length > 0 ? `<h4>Protection Skills</h4><ul class="info">${protectionSkills}</ul>` : ''}
            </div>
        `;

        return output;
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