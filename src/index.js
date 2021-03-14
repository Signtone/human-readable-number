module.exports = function toReadable(num) {
    const figureArray = [
        ``,
        `one`,
        `two`,
        `three`,
        `four`,
        `five`,
        `six`,
        `seven`,
        `eight`,
        `nine`,
    ];
    const decimalArray = ["", "", `twen`, `thir`, `for`, `fif`, "", "", "eigh"];
    const numArray = String(num).split("").reverse();
    let finalNumber = "";
    const last2Numbers = +(numArray[1] + numArray[0]);
    if (num === 0) return "zero";
    if (+numArray[2] > 0) {
        //hundreds
        finalNumber += `${figureArray[+numArray[2]]} hundred`;
    }
    if (+numArray[1] > 1) {
        if (last2Numbers < 60 || +numArray[1] === 8) {
            finalNumber += ` ${decimalArray[+numArray[1]]}ty`;
        } else {
            finalNumber += ` ${figureArray[+numArray[1]]}ty`;
        }
    } else if (+numArray[1] === 1) {
        switch (last2Numbers) {
            case 10:
                finalNumber += ` ten`;
                break;
            case 11:
                finalNumber += ` eleven`;
                break;
            case 12:
                finalNumber += ` twelve`;
                break;
            case 13:
                finalNumber += ` thirteen`;
                break;
            case 14:
                finalNumber += ` fourteen`;
                break;
            case 15:
                finalNumber += ` fifteen`;
                break;
            case 18:
                finalNumber += ` eighteen`;
                break;

            default:
                finalNumber += ` ${figureArray[+numArray[0]]}teen`;
                break;
        }
        return finalNumber.trim();
    }

    finalNumber += ` ${figureArray[+numArray[0]]}`;
    return finalNumber.trim();
};
