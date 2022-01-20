function getCurrentDateTime()
{
document.getElementById("timeDiv").innerHTML=new Date();
}
function startClock()
{
intervalid=setInterval(getCurrentDateTime,1000);
}
function stopClock()
{
clearInterval(intervalid);
}
f