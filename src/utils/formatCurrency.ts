export function formatCurrency(value: number) {
    let valueString = value.toFixed(2);

    let [int, decimal] = valueString.split('.');

    let formattedWholePart = '';
    for (let i = int.length - 1, count = 0; i >= 0; i--) {
        if (count > 0 && count % 3 === 0) {
            formattedWholePart = '.' + formattedWholePart;
        }
        formattedWholePart = int[i] + formattedWholePart;
        count++;
    }

    return `R$ ${formattedWholePart},${decimal}`;
}