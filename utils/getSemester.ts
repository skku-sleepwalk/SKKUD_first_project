export function GetSemester(date: Date | string) {
  const writtenDate = new Date(date);

  const month = writtenDate.getMonth() + 1;
  const year = writtenDate.getFullYear();

  let semester;
  switch (month) {
    case 2:
    case 3:
    case 4:
    case 5:
      semester = "1학기";
      break;
    case 6:
    case 7:
      semester = "여름학기";
      break;
    case 8:
    case 9:
    case 10:
    case 11:
      semester = "2학기";
      break;
    case 12:
    case 1:
      semester = "겨울학기";
      break;
  }

  return year + "년 " + semester;
}
