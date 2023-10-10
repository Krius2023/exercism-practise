// https://exercism.org/tracks/typescript/exercises/bob

export function hey(message: string): string {
    message = message.trim()
    // case 1 - invalid
    if (!message) return 'Fine. Be that way!';

    // case 2 - checking for yelling (all the available letters are in uppercase)
    const isYelling = /[A-Z]/.test(message) && message.toUpperCase() === message;

    // case 3 - question ends with '?'
    const isQuestion = message.endsWith('?')

    switch (true) {
        case isYelling && isQuestion:
            return "Calm down, I know what I'm doing!";
        case isYelling:
            return 'Whoa, chill out!'
        case isQuestion:
            return 'Sure.'
    }
    return 'Whatever.'
}
