function firstWord(s) {
let reg = /^[\s]$/
// 	if(!reg.test(s)){
// 		return s
// 	}
let arr = s.trim().split(/\s/)[0]
	return arr
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
