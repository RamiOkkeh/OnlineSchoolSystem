import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

// {console.log('aaa',dataa)}
const ChartComp = ({ exam }: any) => {

    const data = [
        { argument: 'first', value: exam.firstGrade },
        { argument: 'second', value: exam.secondGrade },
        { argument: 'final', value: exam.finalGrade },
    ];

    // console.log('aaaaa', exam)
    return (
        <div >
            <Paper >
                <Chart
                    data={data}
                >
                    <ArgumentAxis />
                    <ValueAxis tickSize={10} />
                    <SplineSeries valueField="value" argumentField="argument" />
                </Chart>
            </Paper>
        </div>
    )
};
export default ChartComp