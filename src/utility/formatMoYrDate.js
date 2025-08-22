export const formatMoYrDate = (d) => {
    const date = new Date(d);
    const options = { month: "long", year: "numeric", timeZone: "UTC" };
    return date.toLocaleDateString("en-US", options);
};