var num = 16;

switch (true) {
    case num > 18:
        console.log("Adult");
        break;
    case num >= 15 && num <= 18:
        console.log("Teen");
        break;
    default:
        console.log("Child");
        break;
}
