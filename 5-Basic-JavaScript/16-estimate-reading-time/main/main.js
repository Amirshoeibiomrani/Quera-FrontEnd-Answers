function estimateReadingTime(text) {
	// TODO: Implement
	const words = text
		.replace(/[.!?,;:]/, " ")
		.replace(/\s+/, " ")
		.split(" ");

	return words.length === 1 && words[0] === ""
		? 0
		: Math.ceil(words.length / 200);
}

// DO NOT REMOVE NEXT LINE!
export default estimateReadingTime;