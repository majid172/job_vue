<script setup>
import Aside from '@/views/Admin/include/AsideView.vue'
import HeaderView from './include/HeaderView.vue'
import Footer from '@/views/Admin/include/FooterView.vue'

import { useTeacherStore } from '@/stores/admin/teacher'
import { onMounted } from 'vue'

const teacherStore = useTeacherStore()

onMounted(async () => {
    try {
        await teacherStore.fetchTeacher()
    } catch (error) {
        console.error('Failed to fetch teachers:', error)
    }
})
</script>

<template>
    <div class="layout-wrapper layout-content-navbar">
        <div class="layout-container">
            <!-- Menu -->

            <Aside />
            <!-- / Menu -->

            <!-- Layout container -->
            <div class="layout-page">
                <!-- Navbar -->
                <HeaderView />

                <!-- / Navbar -->

                <!-- Content wrapper -->
                <div class="content-wrapper">
                    <div class="container-xxl flex-grow-1 container-p-y">
                        <!-- Content -->
                        <div class="card">
                            <h5 class="card-header">Teachers List</h5>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Name</th>
                                            <th>Subject</th>
                                            <th>Job Title</th>
                                            <th>Status</th>
                                            <th>Action</th>

                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr v-for="(teacher,index) in teacherStore.teachers">
                                            <td>
                                                <i class="icon-base bx bxl-angular icon-md text-danger me-4"></i>
                                                <span>{{ ++index }}</span>
                                            </td>
                                            <td>
                                                <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                        data-bs-placement="top" class="avatar avatar-xs pull-up"
                                                        :title="teacher.name">
                                                        <img :src="`/src/assets/admin/${teacher.image}`" alt="Avatar"
                                                            class="rounded-circle" /> 
                                                    </li>
                                                    <li>{{ teacher.name }}</li>
                                                    
                                                </ul> 
                                            </td>
                                            <td>{{ teacher.subject }}</td>
                                            <td>{{ teacher.job_title }}</td>
                                            <td >
                                                <span class="badge bg-label-primary me-1" v-if="teacher.active == 1">Active</span> 
                                                <span class="badge bg-label-danger me-1" v-else>Deactive</span> 
                                            </td>
                                            <td>
                                                <button class="btn btn-primary btn-sm me-2">Edit</button>
                                                <button class="btn btn-danger btn-sm">Remove</button>
                                            </td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- / Content -->

                    <!-- Footer -->
                    <Footer />
                    <!-- / Footer -->
                    <div class="content-backdrop fade"></div>
                </div>
                <!-- Content wrapper -->
            </div>
            <!-- / Layout page -->
        </div>

        <!-- Overlay -->
        <div class="layout-overlay layout-menu-toggle"></div>
    </div>
</template>