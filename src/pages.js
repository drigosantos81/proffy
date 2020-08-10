const { subjects, weekdays, getSubject } = require('./utils/format');

function pageLanding(req, res) {
    return res.render("index.html");
}

function pageStudy(req, res) {
    const filters = req.query;
    return res.render("study.html", { proffys, filters, subjects, weekdays });
}

function pageGiveClasses(req, res) {
    const dados = req.query;
    const isNotEmpty = Object.keys(dados).length > 0;
    if (isNotEmpty) {
        dados.subject = getSubject(dados.subject)
        proffys.push(dados);
        console.log("Entrei aqui");

        return res.redirect("/study");
    }    
    return res.render("give-classes.html", { subjects, weekdays });
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}