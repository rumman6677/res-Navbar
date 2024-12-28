import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const mathMarksData = [
        { "id": 1, "name": "Alice", "math": 78, "physics": 82, "chemistry": 74 },
        { "id": 2, "name": "Bob", "math": 85, "physics": 89, "chemistry": 90 },
        { "id": 3, "name": "Charlie", "math": 92, "physics": 95, "chemistry": 88 },
        { "id": 4, "name": "Diana", "math": 74, "physics": 70, "chemistry": 68 },
        { "id": 5, "name": "Ethan", "math": 88, "physics": 86, "chemistry": 85 },
        { "id": 6, "name": "Fiona", "math": 80, "physics": 83, "chemistry": 81 },
        { "id": 7, "name": "George", "math": 67, "physics": 72, "chemistry": 65 },
        { "id": 8, "name": "Hannah", "math": 91, "physics": 90, "chemistry": 92 },
        { "id": 9, "name": "Ian", "math": 76, "physics": 78, "chemistry": 75 },
        { "id": 10, "name": "Julia", "math": 83, "physics": 85, "chemistry": 84 }
      ]
      
      

    return (
        <div>
            <LChart width={400} height={400} data={mathMarksData }>

            <XAxis dataKey="name" />
            <YAxis />

             <Line dataKey='math' stroke='blue'></Line>
             <Line dataKey='physics' stroke='yellow'></Line>
             {/* <Line dataKey='chemistry'></Line> */}
            </LChart>
        </div>
    );
};

export default LineChart;