const letra: string = "b";

switch (letra.toLowerCase()) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
        console.log(`A letra "${letra}" é uma vogal!`);
        break;

    default:
        console.log(`A letra "${letra}" é uma consoante!`);
}
