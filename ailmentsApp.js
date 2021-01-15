const mh = new MhApi();
const ailment = new Ailments('.page__results');
const ui = new Ui();

mh.getAilments()
    .then(data => {
        ailment.displayAilments(data.ailments);
    })
    .catch(error => {
        console.log(error);
    });

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('view-details')) {
        let ailmentId = e.target.getAttribute('data-ailment-id');

        mh.getAilments(ailmentId)
            .then(data => {
                ailment.ailmentPopup(data.ailments);
            })
            .catch(error => {
                console.log(error);
            });
    }
});