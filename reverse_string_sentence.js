function reverseWordsInSentence(sentence) {
    // Split the sentence into words using space as the delimiter
    const words = sentence.split(" ");

    // Iterate through each word and reverse it
    const reversedWords = words.map(word => {
        // Use the split-reverse-join approach to reverse the word
        return word.split("").reverse().join("");
    });

    // Join the reversed words back into a sentence
    const reversedSentence = reversedWords.join(" ");

    return reversedSentence;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence); // Output: "sihT si a ynnus yad"
