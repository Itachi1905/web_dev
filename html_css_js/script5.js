console.log("Functions Tutorial")

function nice(name) {
    console.log("Hey " + name + " Yours are Good !")
}
function sum(a,b) {
    // console.log(a+b)
    return (a + b)
}
nice("Kurumi")
nice("Tohka")

const fun1 = (x) => {
    console.log("Hey I am an Arrow Function",x)
}

fun1(54)
fun1(34)