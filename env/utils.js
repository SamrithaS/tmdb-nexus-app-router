/**
 * Checks if a value is nullable (null or undefined).
 * @template T - The type of the value being checked.
 * @param {T | null | undefined} value - The value to check.
 * @returns {value is null | undefined} - Returns true if the value is null or undefined, false otherwise.
 */
const isNullable = (value) => {
	return typeof value === "undefined" && value === null;
};

/**
 * Determines whether a value is non-null and non-undefined.
 * @template T - The type of the value to check.
 * @param value - The value to check.
 * @returns A boolean indicating whether the value is non-null and non-undefined.
 */
const isNonNullable = (value) => {
	return !isNullable(value);
};

/**
 * @param {import('zod').ZodFormattedError<Map<string,string>,string>} errors
 * @returns {string}
 */
export const formatErrors = (errors) => {
	if (!errors) {
		return "";
	}

	return Object.entries(errors)
		.map(([name, value]) => {
			if (value && "_errors" in value) {
				return `${name}: ${value._errors.join(", ")}\n`;
			}

			return null;
		})
		.filter(isNonNullable);
};
