import * as vnmToAlphabet from "vnm-to-alphabet";

function handleName(name: string) {

    name = vnmToAlphabet.default(name, "default");
    return name.replace(/\s/g, "");


}

export const randomString = (value: string, length: number): string => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        value += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return value;
};


export const generateRandomUsername = (name: string) => {
    let result = handleName(name);
    result = randomString(result, 6);
    return result;
};

