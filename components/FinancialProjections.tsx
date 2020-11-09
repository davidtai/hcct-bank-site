import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const FinancialProjections = ({ text, categories, series, ...props }) => {
  const options = {
    chart: {
      type: 'spline',
      height: 650,
      backgroundColor: 'transparent',
    },
    title: {
      text,
      style: {
        fontSize: '2rem',
        color: '#1f243d',
      },
    },
    legend: {
      layout: 'vertical',
      align: 'left',
      verticalAlign: 'top',
      x: 150,
      y: 100,
      floating: true,
      borderWidth: 1,
      backgroundColor: 'transparent',
    },
    xAxis: {
      categories,
      // plotBands: [{ // visualize the weekend
      //   from: 4.5,
      //   to: 6.5,
      //   color: 'rgba(68, 170, 213, .2)'
      // }]
      labels: {
        style: {
          fontSize: '16px',
        },
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        formatter: function () { return '$' + Highcharts.numberFormat((this as any).value, 0, '', ',') },
        // format: '${value}',
        style: {
          fontSize: '16px',
        },
      },
    },
    tooltip: {
      crosshairs: false,
      shared: true,
      valuePrefix: '$'
    },
    credits: {
      enabled: false
    },
    plotOptions: {
      areaspline: {
        fillOpacity: 0.5
      }
    },
    series,
  }

  if (Highcharts.setOptions) {
    Highcharts.setOptions({
      lang: {
        thousandsSep: ',',
      },
    })
  }

  return (<HighchartsReact highcharts={Highcharts} options={options}/>)
}

export default FinancialProjections
