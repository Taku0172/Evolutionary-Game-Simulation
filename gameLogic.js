export function calculatePayoffs(windowsUsers, studentCount) {
    const windowsRate = windowsUsers / studentCount;
    const macRate = 1 - windowsRate;

    return {
        windowsPayoff: 2 * windowsRate,
        macPayoff: macRate
    };
}