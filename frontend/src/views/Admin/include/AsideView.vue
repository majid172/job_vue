<template>
    <nav id="sidebar" class="sidebar js-sidebar">
        <div class="sidebar-content js-simplebar">
            <a class="sidebar-brand" href="index.html">
                <span class="align-middle">e-Exam</span>
            </a>

            <ul class="sidebar-nav">

                <li class="sidebar-item active">
                    <router-link class="sidebar-link" :to="{ name: 'admin.dashboard' }">
                        <i class="align-middle" data-feather="sliders"></i> <span class="align-middle">Dashboard</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="pages-profile.html">
                        <i class="align-middle" data-feather="user"></i> <span class="align-middle">Settings</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="pages-sign-in.html">
                        <i class="align-middle" data-feather="log-in"></i> <span class="align-middle">About us</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="pages-sign-up.html">
                        <i class="align-middle" data-feather="user-plus"></i> <span class="align-middle">Exam</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="pages-blank.html">
                        <i class="align-middle" data-feather="book"></i> <span class="align-middle">Result</span>
                    </a>
                </li>

                <li class="sidebar-header">
                    Tools & Components
                </li>

                <li class="sidebar-item">
                    <router-link class="sidebar-link" :to="{ name: 'admin.students' }">
                        <i class="align-middle" data-feather="square"></i> <span class="align-middle">All
                            Students</span>
                    </router-link>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="">
                        <i class="align-middle" data-feather="check-square"></i> <span class="align-middle">News &
                            Notice</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-cards.html">
                        <i class="align-middle" data-feather="grid"></i> <span class="align-middle">Enrollments</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="ui-typography.html">
                        <i class="align-middle" data-feather="align-left"></i> <span class="align-middle">Books &
                            Orders</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="icons-feather.html">
                        <i class="align-middle" data-feather="coffee"></i> <span class="align-middle">Categories</span>
                    </a>
                </li>

                <li class="sidebar-header">
                    Plugins & Addons
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="charts-chartjs.html">
                        <i class="align-middle" data-feather="bar-chart-2"></i> <span
                            class="align-middle">Courses</span>
                    </a>
                </li>

                <li class="sidebar-item">
                    <a class="sidebar-link" href="maps-google.html">
                        <i class="align-middle" data-feather="map"></i> <span class="align-middle">Blogs</span>
                    </a>
                </li>
                <li class="sidebar-item">
                    <router-link class="sidebar-link" :to="{ name: 'admin.teacher' }">
                        <i class="align-middle" data-feather="map"></i> <span class="align-middle">Teacher List</span>
                    </router-link>
                </li>
            </ul>


        </div>
    </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>