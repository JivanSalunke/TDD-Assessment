function add(inputString) {
    let sum=0;
    let numArray=inputString.split(/[\n,]+/);
    for(let char of numArray){
        sum+=Number(char);
    }
    return sum;
}

test("return sum of the integers when passes string of comma separated or line separated integers", () => {
    expect(add("")).toBe(0);
    expect(add("1")).toBe(1);
    expect(add("1,2")).toBe(3);
    expect(add("1,2,18,20,55")).toBe(96);
    expect(add("10,20,30,40,50,60,70,80,90,100,200,300,400,500")).toBe(1950);
    expect(add("1\n2,3")).toBe(6);
    expect(add("1\n2,3\n4,5\n6,8")).toBe(29);

}); 