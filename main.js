var inputs = [];

function getParagraph1 ()
{
    for (var i = 1; i <=6; i++)
    {
 inputs.push(document.getElementById("para1_input_box_" + i).value);
}
inputs.join(". ");
document.getElementById("showParagraph1").innerHTML = input.join(". ");
}

function getParagraph2 ()
{
    for (var i = 1; i <=6; i++)
    {
 inputs.push(document.getElementById("para2_input_box_" + i).value);
}
inputs.join(". ");
document.getElementById("showParagraph2").innerHTML = input.join(". ");
}