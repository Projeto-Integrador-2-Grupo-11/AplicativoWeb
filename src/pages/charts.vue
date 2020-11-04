<template>
  <div>
    <form class="col-12 mt-4 center">
      <div class="form-group row">
        <label for="example-date-input" class="col-md-3 col-form-label form-control-label">Intervalo de Exibição</label>
        <div class="col-md-3">
          <base-input>
            <select class="form-control" id="period-label">
              <option>Mensal</option>
              <option>Semanal</option>
              <option>Anual</option>
            </select>
          </base-input>
        </div>
        <label for="example-date-input" class="col-md-1 col-form-label form-control-label">Período</label>
        <div class="col-md-3">
          <base-input type="date" value="2018-11-23" id="period"/>
        </div>
      </div>
      <div class=" col-12 center row">
        <label for="example-date-input" class="col-md-3 col-form-label form-control-label">Informação do Gráfico</label>
        <base-input>
          <select class="form-control" id="info-chart">
            <option>Quantidade total de laranjas processadas</option>
            <option>Quantidade total de laranjas boas SEM manchas</option>
            <option>Quantidade total de laranjas boas COM manchas</option>
          </select>
        </base-input>
      </div>
    </form>
    <div class="col-12 mt-6 center">
      <card>
        <template slot="header">
          <!-- Subtitle -->
          <!-- <h6 class="surtitle">Overview</h6> -->
          <!-- Title -->
          <h5 class="h3 mb-0">Informações das laranjas</h5>
        </template>
        <div class="chart-area">
          <bar-chart
            :height="350"
            :chart-data="barChartStacked.chartData"
            :extra-options="barChartStacked.extraOptions"
          >
          </bar-chart>
        </div>
      </card>
    </div>
  </div>
</template>
<script>
  import StatsCard from '@/components/Cards/StatsCard';
  import Card from '@/components/Cards/Card';
  import BaseInput from '@/components/Inputs/BaseInput';
  import BarChart from '@/components/Charts/BarChart';
  import { Charts } from "~/components/Charts/config";

  function randomScalingFactor() {
    return Math.round(Math.random() * 100);
  }

  export default {
    layout: 'DashboardLayout',
    methods: {
    },
    components:{
      StatsCard,
      Card,
      BaseInput,
      BarChart
    },
    data() {
      return {
        barChartStacked: {
          chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
              label: 'Dataset 1',
              backgroundColor: Charts.colors.theme['danger'],
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }, {
              label: 'Dataset 2',
              backgroundColor: Charts.colors.theme['primary'],
              data: [
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor(),
                randomScalingFactor()
              ]
            }]

          },
          extraOptions: {
            tooltips: {
              mode: 'index',
              intersect: false
            },
            responsive: true,
            scales: {
              xAxes: [{
                stacked: true,
              }],
              yAxes: [{
                stacked: true
              }]
            }
          }
        }
      }
    },
  }
</script>
<style scoped>
/* .v-line{
  transform: rotate(90deg); 
  width: 116px; 
}  */
</style>