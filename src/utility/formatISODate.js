export function formatISODate(date){
    const d = new Date(date);
    const options = { month: 'short', day: 'numeric', year: 'numeric' }
    return d.toLocaleDateString('en-US', options);
}