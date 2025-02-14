// import {date2KoreanAge, formatDate, formatTime} from "./dateTyme"
import * as dateTyme from "./dateTyme";

describe("dateTyme test", () => {
    test("Date() 객체를 YYYY-MM-DD 형태로 변환한다.", () => {
        const date = new Date("2025-02-14T08:39:23Z");
        expect(dateTyme.formatDate(date)).toBe("2025-02-14");
    })

    test("Date() 객체를 HH:MM:SS 형태로 변환한다.", () => {
        const date = new Date("2025-02-14T08:39:23Z");
        expect(dateTyme.formatTime(date)).toBe("08:39:23");
    })

    test("생년월일을 입력받아 한국나이를 반환한다.", () => {
        const date = new Date("2025-02-14T08:39:23Z");
        expect(dateTyme.date2KoreanAge(date)).toBe(1);
    })

    test("생년월일을 입력받아 만 나이를 반환한다.", () => {
        const date = new Date("2011-02-14T08:39:23Z");
        expect(dateTyme.date2Age(date)).toBe(14);
    })
})