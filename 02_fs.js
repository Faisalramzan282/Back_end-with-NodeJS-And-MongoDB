
console.log("ASYNC 1");
fs.readdir('./',function(err,files)
{
    if(err)
    {
        console.log("Error is ==>",err)
    }
    else{
        console.log("Files====>",files)
    }
})