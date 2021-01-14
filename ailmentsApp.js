const mh = new MhApi();
const ui = new Ui('.page__results');

mh.getAilments()
    .then(data => {
        ui.displayAilments(data.ailments);
    })
    .catch(error => {
        console.log(error);
    });