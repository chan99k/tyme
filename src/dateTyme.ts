// 년월일 반환기
export const formatDate = (date: Date = new Date()): string => {
    return date.toISOString().split("T")[0] ?? "YYYY-MM-DD"; // YYYY-MM-DD
}
// 시간 반환기
export const formatTime = (date: Date = new Date()): string => {
    return date.toISOString()?.split("T")[1]?.slice(0,8) ?? "??:??:??"; // 12:00:00Z
}

// korean age 변환기
export const date2KoreanAge = (birthDate: Date = new Date()): number => {
    return new Date().getFullYear() - birthDate.getFullYear() + 1;
}

// 만 나이 변환기
export const date2Age = (birthDate: Date = new Date()): number => {
    const today = new Date();
    const yearDiff = today.getFullYear() - birthDate.getFullYear();

    // 생일이 지났는지 확인
    const hasBirthdayPassed =
        today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

    return hasBirthdayPassed ? yearDiff : yearDiff - 1;
}

// TODO :: 12지 뭐시기 반환기
// TODO :: 밀리초까지 반환
// TODO :: 시간만 반환
// TODO :: 분만 반환
// TODO :: 초만 반환
// TODO :: 월만 반환
// TODO :: 년만 반환
// TODO :: 일만 반환
// TODO :: 시간 -> 0개월 0일 0분 0초 반환
// TODO :: 날짜 -> d-day 반환  -> 일만 반환, 일과 시간 반환, 일과 시간과 분 반환, 일과 시간과 분과 초 반환, 일과 시간과 분과 초와 밀리초 반환
