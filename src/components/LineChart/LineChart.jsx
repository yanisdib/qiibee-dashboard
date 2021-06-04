import { Line } from 'react-chartjs-2';

export default function LineChart({ data }) {
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    };
    return (
        <>
            <Line data={data} options={options} />
        </>
    );
}
