import { calculatePayoffs } from "./gameLogic.js";

let resultChart = null;

const runButton = document.getElementById("runButton");

runButton.addEventListener("click", () => {
    const studentCount = Number(
        document.getElementById("studentCount").value
    );

    const initialWindowsRate = Number(
        document.getElementById("initialWindowsRate").value
    );

    let windowsUsers = Math.round(
        studentCount * initialWindowsRate / 100
    );

    let macUsers = studentCount - windowsUsers;

    const history = [];
    history.push(windowsUsers / studentCount);

    // 固定パラメータ
    const retirementRate = 0.05;
    const switchingRate = 0.10;
    const years = 500;

    for (let year = 1; year <= years; year++) {
        const retiredStudents = Math.round(
            studentCount * retirementRate
        );

        const retiredWindows = Math.round(
            retiredStudents * windowsUsers / studentCount
        );

        const retiredMac = retiredStudents - retiredWindows;

        windowsUsers -= retiredWindows;
        macUsers -= retiredMac;

        // 新入生の機種はランダム
        for (let i = 0; i < retiredStudents; i++) {
            if (Math.random() < 0.5) {
                windowsUsers++;
            } else {
                macUsers++;
            }
        }

        const { windowsPayoff, macPayoff } =
            calculatePayoffs(windowsUsers, studentCount);

        if (windowsPayoff > macPayoff) {
            const switchers = Math.round(
                macUsers * switchingRate
            );

            macUsers -= switchers;
            windowsUsers += switchers;
        } else if (macPayoff > windowsPayoff) {
            const switchers = Math.round(
                windowsUsers * switchingRate
            );

            windowsUsers -= switchers;
            macUsers += switchers;
        }

        history.push(windowsUsers / studentCount);
    }

    const finalWindowsRate =
        Math.round((windowsUsers / studentCount) * 1000) / 10;

    document.getElementById("resultMessage").textContent =
        `500年後：Windows ${windowsUsers}人、Mac ${macUsers}人
        （Windows比率 ${finalWindowsRate}%）`;

    const labels = [];

for (let year = 0; year <= years; year++) {
    labels.push(year);
}

const chartData = history.map(rate => rate * 100);

const chartCanvas = document.getElementById("resultChart");

if (resultChart !== null) {
    resultChart.destroy();
}

resultChart = new Chart(chartCanvas, {
    type: "line",
    data: {
        labels: labels,
        datasets: [
            {
                label: "Windows比率",
                data: chartData,
                borderWidth: 2,
                pointRadius: 0
            },
            {
                label : "理論上の境目(33.3%)",
                data : labels.map(() => 100/3),
                borderWidth: 1,
                pointRadius: 0,
                borderDash: [6, 6]
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            x: {
                title: {
                    display: true,
                    text: "経過年数"
                }
            },
            y: {
                min: 0,
                max: 100,
                title: {
                    display: true,
                    text: "Windows比率（%）"
                }
            }
        }
    }
});
});