const container=document.querySelector("#container")
const createButton=document.querySelector("#create")

function generateGrid(numberOfRows,numberOfColumns)
{
    for(i=0;i<numberOfRows;i++)
    {
        for(j=0;j<numberOfColumns;j++)
        {
            const divBox=document.createElement("div")
            divBox.className="grid"
            container.appendChild(divBox)
        }
    }
    subscribeToEvents()
    
}
function subscribeToEvents()
{
    const boxes=document.querySelectorAll(".grid")
    boxes.forEach(function(box){
        box.addEventListener("mouseover",function(){
            box.classList.add("hovered")
        })

    })
}
createButton.addEventListener("click",function(){
    let newNumberOfColumns=parseInt(prompt("How many columns of your new grid do you want?"))
    let newNumberOfRows=parseInt(prompt("How many rows of your new grid do you want?"))
    while(container.firstChild)
    {
        container.firstChild.remove()
    }
    generateGrid(newNumberOfColumns,newNumberOfRows)

})
generateGrid(50,30)