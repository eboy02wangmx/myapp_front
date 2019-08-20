import {Doughnut, mixins} from 'vue-chartjs'
const {reactiveProp} = mixins

export default {
  extends: Doughnut,
  mixins: [reactiveProp],
  props: {
    rateValue: Number,
    chartData: {
      required: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.renderChart(
        {
          datasets: [
            {
              backgroundColor: ['#9DC974', '#EBEBEB'],
              borderColor: ['#9DC974', '#EBEBEB'],
              hoverBackgroundColor: ['#9DC974', '#EBEBEB'],
              hoverBorderColor: ['#9DC974', '#EBEBEB'],
              data: [
                this.rateValue,
                100 - this.rateValue
              ]
            }
          ]
        },
        {
          responsive: true,
          maintainAspectRatio: true,
          title: {
            display: false
          },
          tooltips: {
            enabled: false
          },
          animations: {
            easing: 'easeOutQuart'
          }
        }
      )
    })
  }
}
