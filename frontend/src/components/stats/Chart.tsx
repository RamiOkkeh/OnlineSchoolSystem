import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

// {console.log('aaa',dataa)}
const ChartComp = ({ testdata }: any) => {

    const data = [
        { argument: 'first', value: testdata.first },
        { argument: 'second', value: testdata.second },
        { argument: 'final', value: testdata.final },
    ];

    // console.log('aaaaa', testdata)
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