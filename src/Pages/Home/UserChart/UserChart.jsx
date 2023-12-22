import StaticsBarCharts from "./BarCharts/StaticsBarCharts";
import PieChartDisplay from "./PieChart/PieChartDisplay";


const UserChart = () => {
    return (
        <>
            <div className="text-center my-5 items-center mx-auto">
                <h1 className="text-2xl font-bold text-teal-700 sm:text-3xl">
                    Taskify Pro User Statistics
                </h1>

                <p className="mt-1.5 text-sm text-gray-500">
                    Let&apos;s manage your taks here 🎉
                </p>
            </div>
            <div className="grid gap-5 items-center justify-center justify-items-center grid-cols-1 lg:grid-cols-2 mx-12">

                <StaticsBarCharts></StaticsBarCharts>
                <PieChartDisplay></PieChartDisplay>
            </div>
        </>
    );
};

export default UserChart;