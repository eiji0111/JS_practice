class Student {

  constructor(name) {
    this.name = name;
  }

  cal_avg(data) {
    var sum = 0;
    for (var i = 0; i < data.length; i++) {
      sum += data[i];
    }
    var avg = sum / data.length;
    return avg;
  }

  jadge(avg) {
    var result = 0;
    if (avg >= 60) {
      result = "passed";
    }
    if (avg <= 60) {
      result = "failed";
    }
    return result;
  }
}

var s1 = new Student("mori");
var data = [50, 90, 10, 70, 60];
var avg = s1.cal_avg(data);
var result = s1.jadge(avg);

console.log(s1);
console.log(data);
console.log(avg);
console.log(result);
