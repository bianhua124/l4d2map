function Tab(num)
{
    var i;
    for(i=1;i<=6;i++)
    {
        if(i==num)
           document.getElementById("d"+i).style.display="block";
         else
           document.getElementById("d"+i).style.display="none";
    }
}