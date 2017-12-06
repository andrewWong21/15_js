
var fibH = function (p, s1, s2) {if (p <= 1) return s2; else return fibH(p - 1, s2, s1 + s2)};
var fibonacci = function(n) {
    return fibH(n, 0, 1);
};

var gcd = function (a, b) {
	if (a < b) return gcd(b,a);
	if (a % b == 0) return b;
    else return gcd(b, a % b);
};

var studentList = ['Adeeb', 'Ish', 'Max', 'Andrew', 'Jake', 'DW'];
var randomStudent = function() {return studentList[Math.floor(Math.random() * studentList.length)];};
