import { PieChart, Pie, Cell, Legend } from "recharts";

const PieChartDisplay = () => {

    const data = [
        {
            name: 'Students',
            value: 382,
        },
        {
            name: 'Teachers',
            value: 168,
        },
        {
            name: 'Doctors',
            value: 119,
        },
        {
            name: 'Engineers',
            value: 268,
        }
    ];

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.3;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                fontSize="24"
                fontWeight='bold'
                textAnchor={x > cx ? "start" : "end"}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(1)}%`}
            </text>
        );
    };
        
    return (
        <div>
            <div className="flex justify-center mb-5 mx-auto items-center">
                <PieChart width={400} height={400} className="ml-12 w-1/2 md:w-full">
                    <Pie
                        data={data}
                        cx={200}
                        cy={200}
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Legend></Legend>
                </PieChart>
            </div>
            
        </div>
    );
};

export default PieChartDisplay;