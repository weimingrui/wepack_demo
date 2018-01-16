
var printTest=function() {
    console.log("asdad")
}
window.Test={
    test(){
        (()=>{console.log(123123123)})();
        console.log("test")
    },
    render(){
        console.log("render")
    }

};
export default Test