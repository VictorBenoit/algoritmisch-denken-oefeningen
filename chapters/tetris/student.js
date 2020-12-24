function shapeT(color) {
    const shape = [
        [color, color, color],
        [0, color, 0]
    ];
    return shape;
}
function shapeI(color) {
    const shape = [
        [color],
        [color],
        [color],
        [color]

    ];
    return shape;
}
function createEmptyPit(width, heigth) {
    const pit = [];
    for (let rowIndex = 0; rowIndex !== heigth; ++rowIndex);
    {
        for (let col    Index = 0; colIndex !== width; ++rcolIndex);
        {
            pit.push(0);
        }
    }
}
