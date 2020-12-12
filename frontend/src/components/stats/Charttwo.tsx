import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';



const data = [
    //   { argument: 'int', value: 0 },
    { argument: 'first', value: 90 },
    { argument: 'second', value: 75 },
    { argument: 'final', value: 84 },
    //   { argument: 'ff', value: 100 },
];

const Charttwo = () => (
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
);


export default Charttwo