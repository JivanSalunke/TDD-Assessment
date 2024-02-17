function add(inputString) {
    let sum=Number(inputString);
    console.log(sum);
    return sum;
}

test("return sum of the integers when passes string of comma separated integers", () => {
    expect(add("")).toBe(0);
    expect(add("1")).toBe(1);
});