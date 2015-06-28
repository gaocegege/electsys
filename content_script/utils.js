String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    var reg = new RegExp("({[" + i + "]})", "g");
                    result = result.replace(reg, arguments[i]);
                }
            }
        }
    }
    return result;
}

function score2gpa(score){
    // not quite sure
    if (score == "成绩"){
        return "GPA";
    }
    if (score >= 95){
        return 4.30;
    }else if (score >= 90){
        return 4.00;
    }else if (score >= 85){
        return 3.70;
    }else if (score >= 80){
        return 3.30;
    }else if (score >= 75){
        return 3.00;
    }else if (score >= 70){
        return 2.70;
    }else if (score >= 67){
        return 2.30;
    }else if (score >= 65){
        return 2.00;
    }else if (score >= 63){
        return 1.70;
    }else if (score >= 60){
        return 1.00;
    }else{
        return 0.00;
    }
    return "";
}

function isGpa (s) {
	var grade = s[0].toLowerCase()
	if (grade >= 'a' && grade <= 'f') {
		return true;
	}
	else if (grade == 'p' || grade == 'u' || grade == 'n') {
		return true;
	}
	else {
		return false;
	}
}

function gpa2score(s) {
	var grade = s[0].toLowerCase();
	if (grade == 'a') {
		if (s.length == 1) {
			return 90;
		}
		else if (s[1] == '+') {
			return 95;
		}
		else {
			return 85;
		}
	}
	else if (grade == 'b') {
		if (s.length == 1) {
			return 75;
		}
		else if (s[1] == '+') {
			return 80;
		}
		else {
			return 70;
		}
	}
	else if (grade == 'c') {
		if (s.length == 1) {
			return 65;
		}
		else if (s[1] == '+') {
			return 67;
		}
		else {
			return 62;
		}
	}
	else if (grade == 'd') {
		return 60;
	}
	else {
		return 0;
	}
}