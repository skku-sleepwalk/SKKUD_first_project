export function GetDate(date: Date | string) {
  const writtenDate = new Date(date);

  const year = writtenDate.getFullYear();
  const month = writtenDate.getMonth() + 1;
  const day = writtenDate.getDate();

  return year + "년 " + month + "월 " + day + "일";
}
