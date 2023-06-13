let z = {
    x: 1
}
$(() => {
    $("body")
        .append(`
            <br>
            <h1>NEJN (NeDB - ExpressJS - JQueryUI - NodeJS) Starter</h1>
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