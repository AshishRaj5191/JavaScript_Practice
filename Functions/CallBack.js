function hello(first_name, callback)
{
    callback();
    console.log(first_name);
}

function goodbye()
{
    console.log("Good Bye");
}

hello("Ashish", goodbye);