import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Rectangle } from 'recharts';

const StaticsBarCharts = () => {

    const data = [
        {
            name: 'Students',
            uv: 382,
        },
        {
            name: 'Teachers',
            uv: 168,
        },
        {
            name: 'Doctors',
            uv: 119,
        },
        {
            name: 'Engineers',
            uv: 268,
        }
    ];

    return (
        <div>
            <BarChart
                width={400}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pv" fill="#0088FE" activeBar={<Rectangle fill="#00C49F" stroke="blue" />} />
                <Bar dataKey="uv" fill="#00C49F" activeBar={<Rectangle fill="#0088FE" stroke="purple" />} />
            </BarChart>
        </div>
    );
};

export default StaticsBarCharts;