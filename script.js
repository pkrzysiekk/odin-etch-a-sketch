const container=document.querySelector("#container")

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
}
