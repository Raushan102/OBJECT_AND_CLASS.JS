
function  rectanglePattern(row,col)
{
    for(let i=0;i<row;i++)
    {
        let row=" ";
        for(let j=0;j<col-i;j++)
        {
            row +="*";
        }
        console.log(row);
    }

}



rectanglePattern(6,6)