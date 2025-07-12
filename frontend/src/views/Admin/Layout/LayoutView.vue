<script setup>
import { RouterView } from 'vue-router'

// Import CSS files
import '@/assets/admin/css/demo.css'
import '@/assets/admin/vendor/css/core.css'
import '@/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.css';
import '@/assets/admin/vendor/libs/apex-charts/apex-charts.css';

// Import JS helper/config files
import '@/assets/admin/vendor/js/helpers.js';
import '@/assets/admin/js/config.js';
// import '@/assets/admin/js/config.js' // Uncomment if config.js is needed

// Import vendor libraries
import '@/assets/admin/vendor/libs/jquery/jquery.js'
import '@/assets/admin/vendor/libs/popper/popper.js'
import '@/assets/admin/vendor/libs/perfect-scrollbar/perfect-scrollbar.js'
import '@/assets/admin/vendor/js/bootstrap.js'
import '@/assets/admin/vendor/js/menu.js'
import '@/assets/admin/vendor/libs/apex-charts/apexcharts.js'

// Import main admin JS
import '@/assets/admin/js/main.js'
import '@/assets/admin/js/dashboards-analytics.js'
</script>

<template>
  <RouterView />
</template>
