let CutText = ({text, maxLength}) => {
	const cutingText = (text, maxLength) => {
		if (text.length > maxLength) {
			return text.substring(0, maxLength) + "...";
		}
		return text;
	};

	return cutingText(text, maxLength);
};

export default CutText;
