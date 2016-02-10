function add () {
	var a= parseInt(document.getElementById('num1').value);
	var b= parseInt(document.getElementById('num2').value);
	var c=a+b;
	console.log(c);
	document.getElementById('result1').innerHTML='Addition of two number is :'+''+c; // This gives result in web page.
	//document.getElementById('result'). c; this gives result in console.
	// body...
}
function sub () {
	var a= parseInt(document.getElementById('num1').value);
	var b= parseInt(document.getElementById('num2').value);
	var d=a-b;
	console.log(d);
	document.getElementById('result2').innerHTML='substraction of two number is :'+''+d;
	// body...
}
function mul () {
	var a= parseInt(document.getElementById('num1').value);
	var b= parseInt(document.getElementById('num2').value);
	var e=a*b;
	console.log(e);
	document.getElementById('result3').innerHTML='Multiplication of two number is :'+''+e;
	// body...
}
function div () {
	var a= parseInt(document.getElementById('num1').value);
	var b= parseInt(document.getElementById('num2').value);
	var f=a/b;
	console.log(f);
	document.getElementById('result4').innerHTML='Division of two number is :'+''+f;
	// body...
}