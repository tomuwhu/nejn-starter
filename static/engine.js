let z = {
    x: 1
}
$(() => {
    $("body")
        .append(`
            <br>
            <h1>NEJN Starter</h1>
            <h5>(<a href="https://www.npmjs.com/package/nedb?activeTab=readme" target="_blank"
            >NeDB</a> - <a href="https://expressjs.com/en/starter/hello-world.html" target="_blank"
            >ExpressJS</a> - <a href="https://jqueryui.com/" target="_blank"
            >JQueryUI - <a href="https://nodejs.org/en/about" target="_blank"
            >NodeJS)</h5>
        `)
        .append(`<div class="lev">${
            Levenshtein("cica","picsa")
        }</div>`)
        .append(`<div class="lev">${
            Levenshtein("jézuska","géppuska")
        }</div>`)
        .append(`<div class="katt">katt</div>`)
        .append(`<div id="resp">0</div>`)
    $(".lev").draggable()
    $("#resp").draggable()
    $(".katt").click( () => $
        .post("/post", z)
        .done(r => {
            z.x = r.length
            $("#resp").html(z.x)
        })
    )
})