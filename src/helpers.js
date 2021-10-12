export function choice(items) {
    return items[Math.floor(Math.random() * items.length)];
}

export function remove(items, item) {
    const idx = items.indexOf(item);
    if (idx === -1) return;
    return items.splice(idx, 1)[0];
}
