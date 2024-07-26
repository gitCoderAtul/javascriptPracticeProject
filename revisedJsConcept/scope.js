let aName = 'atul';
function a(){
    function b(){
        function c(){
            console.log(aName)
        }
        c()
    }
    b()
}
a()

{
    var d = 10;
    let e = 20;
    const f = 30;
    console.log(d);
    console.log(e);
    console.log(f);
}
console.log(d);
console.log(e);
console.log(f);