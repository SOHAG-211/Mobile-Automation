import { test as baseTest } from "@playwright/test";

type Sohag = {
    hey: string;
}


const fixture = baseTest.extend<Sohag>({
    hey: "I am ",

})

export const test = fixture;
export const assert = fixture.expect
export const describe = fixture.describe;