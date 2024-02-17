function add(inputString) {
    let sum=0;
    Array.from(inputString).forEach(char => {
        if(!isNaN(char)){
            sum+=Number(char);
        }
    });
    return sum;
}

test("return sum of the integers when passes string of comma separated integers", () => {
    expect(add("")).toBe(0);
    expect(add("1")).toBe(1);
    expect(add("1,2")).toBe(3);
});