import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';

class BarChart extends Component{
  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData
    }
  }

  static defaultProps = {
    displayTitle:true,
    displayLegend: true,
    legendPosition:'right',
    dataTitle:'Monthly Activity'
  }

  render(){
    return (
      <div className="chart">
        <Bar
          width={800}
          height={400}
          data={this.state.chartData}
          options={{
            title:{
              display:this.props.displayTitle,
              text:this.props.dataTitle,
              fontSize:25
            },
            legend:{
              display:this.props.displayLegend,
              position:this.props.legendPosition
            }
          }}
        />
      </div>
    )
  }
}

export default BarChart;