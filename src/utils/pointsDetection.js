export function isClapping(hand1, hand2){
    const distance = calculateDistance(hand1, hand2);
    return distance < 20;
};
export function drawBoundingBox(ctx, box, color) {
    ctx.beginPath();
    ctx.lineWidth = "2";
    ctx.strokeStyle = color;
    ctx.rect(box.xMin, box.yMin, box.width, box.height);
    ctx.stroke();
}

export function drawPoint(ctx, point, color, size) {
    ctx.fillStyle = color;
    ctx.fillRect(point.x, point.y, size, size);
}

export const calculateDistance = (point1, point2) => {
    const dx = point1?.x - point2?.x;
    const dy = point1?.y - point2?.y;


    return (dx !== undefined && dy !== undefined) ? Math.sqrt(dx * dx + dy * dy) : NaN;
};

export const isFingerTouchingNose = (nose, fingertip) => {
    const distance = calculateDistance(nose, fingertip);
    return distance < 9;
};

export const isFingerTouchingTwoPoint = (leftPoint, rightPoint, leftHand, rightHand) => {
    const distance1 = calculateDistance(leftPoint, leftHand);
    const distance2 = calculateDistance(rightPoint, rightHand);
    return distance1 < 9 || distance2 < 9;
}