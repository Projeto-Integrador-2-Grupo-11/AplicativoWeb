<template>
  <div>
    <div class="col-12 mt-3 row">
      <div class="col-4">
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
      <div class="col-4">
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
      <div class="col-4">
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
    <Card class="bg-white">
      <div class="row col-12">
        <div class=" col-8">
          <StatsCard class="bg-green">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas SEM Imperfeições </h5>
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
        <div class=" col-4"> 
          <StatsCard class="bg-yellow">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0 text-white">Total de Laranjas COM Imperfeições</h5>
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
  import StatsCard from '@/components/Cards/StatsCard'
  import Card from '@/components/Cards/Card'

  export default {
    layout: 'DashboardLayout',
    methods: {
    },
    components:{
      StatsCard,
      Card
    }
  }
</script>