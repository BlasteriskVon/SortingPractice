let sortingAlgorithms = ["Insertion", "Selection"];

function setPage(){
    $(".container").empty();
    let content = `
    <div class="row">
        <div class="col-md-12 text-center jumbotron">
            <h1 id="header">Sorting Practice!</h1>
            <span id="data"></span>
        </div>
        <div class="col-md-12">
            <form id="missArray">
                <input type="number" id="array" style="width:100%" placeholder="Please enter an assortment of numbers!">
    `;
    for(let i = 0;i < sortingAlgorithms.length;i++){
        content += `
        <input type="radio" id="${sortingAlgorithms[i].toLowerCase()}" name="algorithm" value="${sortingAlgorithms[i].toLowerCase()}">
        <label for="${sortingAlgorithms[i].toLowerCase()}">${sortingAlgorithms[i]}</label><br/>
        `
    }

    let contentEnd = `
                <input type="submit" value="Submit">
            </form>
        </div>
    </div>
    `;
    $(".container").append($(content + contentEnd));
    $("#missArray").on("submit", function(event){
        event.preventDefault();

    })
}

setPage();