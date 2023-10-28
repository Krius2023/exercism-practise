// https://exercism.org/tracks/typescript/exercises/protein-translation

const codonList = new Map([
    ['AUG', 'Methionine'],
    ['UUU', 'Phenylalanine'],
    ['UUC', 'Phenylalanine'],
    ['UUA', 'Leucine'],
    ['UUG', 'Leucine'],
    ['UCU', 'Serine'],
    ['UCC', 'Serine'],
    ['UCA', 'Serine'],
    ['UCG', 'Serine'],
    ['UAU', 'Tyrosine'],
    ['UAC', 'Tyrosine'],
    ['UGU', 'Cysteine'],
    ['UGC', 'Cysteine'],
    ['UGG', 'Tryptophan'],
    ['UAA', 'STOP'],
    ['UAG', 'STOP'],
    ['UGA', 'STOP']
]);

export function translate(codon: string): Array<string> {
    let proteinTranslation: Array<string> = [];
    const invalidMessage = 'Invalid codon';
    const codons = splitIntoParts(codon, 3);

    for (let codon of codons) {
        let matchProtein = codonList.get(codon) || ""
        if (matchProtein === 'STOP') { return proteinTranslation }
        if (!matchProtein) { throw new Error(invalidMessage); }
        proteinTranslation = [...proteinTranslation, matchProtein];
    }
    if (proteinTranslation.length > 0) return proteinTranslation;
    throw new Error(invalidMessage)
}
const splitIntoParts = function (str: string, partLength: number) {
    let parts = []
    for (let i = 0; i <= str.length - 1; i += partLength) {
        parts.push(str.substring(i, i + partLength));
    }
    return parts
};