<template>
  <div>
    <label for="example-date-input" class="col-md-12 center mt-3 col-form-label form-control-label">Selecione o período que deseja visualizar</label>
    <form class="col-12 mt-4 center">
      <div class="form-group row">
        <label for="example-date-input" class="col-md-1 col-form-label form-control-label">Período Inicial</label>
        <div class="col-md-3">
          <base-input type="date" value="2018-11-23" id="example-date-input"/>
        </div>
        <label for="example-date-input" class="col-md-1 col-form-label form-control-label">Período Final</label>
        <div class="col-md-3">
          <base-input type="date" value="2018-11-23" id="example-date-input"/>
        </div>
      </div>
    </form>
    <div class="col-12 mt-6 row">
      <div class="col-md-4 col-sm-12">
        <StatsCard class="bg-orange">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas Processadas</h5>
              <span class="h2 font-weight-bold mb-0 text-white">4.000</span>
            </div>
          </div>
          <p class="mt-3 mb-0 text-sm">
            <span class="text-nowrap text-white">Equivalência em Kg</span>
          </p>
        </StatsCard>
      </div>
      <div class="col-md-4 col-sm-12">
        <StatsCard class="bg-purple-card">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas Boas</h5>
              <span class="h2 font-weight-bold mb-0 text-white">4.000</span>
            </div>
          </div>
          <p class="mt-3 mb-0 text-sm">
            <span class="text-nowrap text-white">Equivalência em Kg</span>
          </p>
        </StatsCard>
      </div>
      <div class="col-md-4 col-sm-12">
        <StatsCard class="bg-pink">
          <div class="row">
            <div class="col">
              <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas Descartadas</h5>
              <span class="h2 font-weight-bold mb-0 text-white">4.000</span>
            </div>
          </div>
          <p class="mt-3 mb-0 text-sm">
            <span class="text-nowrap text-white">Equivalência em Kg</span>
          </p>
        </StatsCard>
      </div>
    </div>
    <!-- <hr class="v-line"> -->
    <Card class="bg-white col-11 center">
      <h5 class="card-title text-uppercase text-muted mb-0 ">Subclassificações das Laranjas Boas</h5>
      <div class="row mt-3 col-12">
        <div class="col-md-8 col-sm-12">
          <StatsCard class="bg-green">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas SEM Mancha </h5>
                <span class="h2 font-weight-bold mb-0 text-white">4.000</span>
              </div>
            </div>
            <div class="row row-example">
               <div class="col-sm">
                <span>Grandes - 1.020</span>
              </div>
              <div class="col-sm">
                <span>Médias - 100</span>
              </div>
              <div class="col-sm">
                <span>Pequenas - 1.000</span>
              </div>
            </div>
          </StatsCard>
        </div>
        <div class="col-md-4 col-sm-12"> 
          <StatsCard class="bg-yellow">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas COM Mancha</h5>
                <span class="h2 font-weight-bold mb-0 text-white">4.000</span>
              </div>
            </div>
          </StatsCard>
        </div>
      </div>
    </Card>
  </div>
</template>
<script>
  import StatsCard from '@/components/Cards/StatsCard';
  import Card from '@/components/Cards/Card';
  import BaseInput from '@/components/Inputs/BaseInput';

  export default {
    layout: 'DashboardLayout',
    methods: {
    },
    components:{
      StatsCard,
      Card,
      BaseInput
    }
  }
</script>
<style scoped>
/* .v-line{
  transform: rotate(90deg); 
  width: 116px; 
}  */
</style>