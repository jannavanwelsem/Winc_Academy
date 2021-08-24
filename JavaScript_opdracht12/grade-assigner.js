function assignGrade(score) {
    if (score > 90) {
      return "A";
    } else if (score > 80) {
      return "B";
    } else if (score > 70) {
      return "C";
    } else if (score > 65) {
      return "D";
    } else {
      return "E";
    }
  }

  for (i = 60; i <=100; i++){
      let grade = assignGrade(i);
      if (grade === "A" | grade === "E"){
        console.log('For scoring ' + i + ' points, you get an ' + grade);
      } else {
        console.log('For scoring ' + i + ' points, you get a ' + grade);
      }
  }