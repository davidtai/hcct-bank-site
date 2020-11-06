import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const SavingsChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 500,
    },
    title: {
      text: 'How much do Americans save?',
      style: {
        fontSize: '2rem',
        color: '#11225a',
      },
    },
    subtitle: {
      text: 'Source: <a href="https://www.statista.com/chart/20323/americans-lack-savings/">GOBankingRates</a> n=846, conducted Nov 25-26, 2019'
    },
    xAxis: {
      categories: ['Nothing', 'Less than $1,000', '$1,000-$4,999', '$5,000-$9,999', '$10,000-$19,999', '$20,000-$49,999', '$50,000 or more'],
      title: {
        text: null,
      },
      labels: {
        overflow: 'justify',
        style: {
          fontSize: '1rem',
        },
        padding: 20,
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: 'Percentage of Population',
        align: 'high'
      },
      labels: {
        overflow: 'justify',
        format: '{value}%',
        style: {
          fontSize: '16px',
        },
      },
      lineWidth: 0,
      minorGridLineWidth: 0,
      lineColor: 'transparent',
      minorTickLength: 0,
      tickLength: 0
    },
    tooltip: {
        valueSuffix: '%'
    },
    plotOptions: {
      bar: {
        dataLabels: {
          enabled: true,
          style: {
            fontSize: '16px',
          },
          format: '{y}%',
        },
        // pointPadding: 20,
        pointWidth: 40,
      },
    },
    legend: {
      enabled: false,
    //   layout: 'vertical',
    //   align: 'right',
    //   verticalAlign: 'top',
    //   x: -40,
    //   y: 80,
    //   floating: true,
    //   borderWidth: 1,
    //   backgroundColor:
    //     (Highcharts.defaultOptions as any).legend.backgroundColor || '#FFFFFF',
    //   shadow: true
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Population',
        data: [45, 24, 12, 5, 5, 4, 6],
    }],
  }

  return (<HighchartsReact options={options}/>)
}

export default SavingsChart
