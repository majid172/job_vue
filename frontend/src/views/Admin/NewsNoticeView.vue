<script setup>
import Aside from '@/views/Admin/include/AsideView.vue';
import HeaderView from './include/HeaderView.vue';
import Footer from '@/views/Admin/include/FooterView.vue'
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
                            <div class="card-header d-flex justify-content-between align-items-center">
                                <h5 class="mb-0">News & Notice List</h5>
                                <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal"
                                    data-bs-target="#modalToggle">
                                    Create Notice
                                </button>

                                <div class="modal fade" id="modalToggle" aria-labelledby="modalToggleLabel"
                                    tabindex="-1" style="display: none" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="modalToggleLabel">Add News & Notice</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">

                                            </div>
                                            <div class="modal-footer">
                                                <button class="btn btn-primary" data-bs-target="#modalToggle2"
                                                    data-bs-toggle="modal" data-bs-dismiss="modal">
                                                    Open second modal
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>SL</th>
                                            <th>Title</th>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr>
                                            <td>
                                                <i class="icon-base bx bxl-angular icon-md text-danger me-4"></i>
                                                <span>Angular Project</span>
                                            </td>
                                            <td>Albert Cook</td>
                                            <td>
                                                <ul class="list-unstyled m-0 avatar-group d-flex align-items-center">
                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                        data-bs-placement="top" class="avatar avatar-xs pull-up"
                                                        title="Lilian Fuller">
                                                        <img src="../assets/img/avatars/2.png" alt="Avatar"
                                                            class="rounded-circle" />
                                                    </li>
                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                        data-bs-placement="top" class="avatar avatar-xs pull-up"
                                                        title="Sophia Wilkerson">
                                                        <img src="../assets/img/avatars/3.png" alt="Avatar"
                                                            class="rounded-circle" />
                                                    </li>
                                                    <li data-bs-toggle="tooltip" data-popup="tooltip-custom"
                                                        data-bs-placement="top" class="avatar avatar-xs pull-up"
                                                        title="Christina Parker">
                                                        <img src="../assets/img/avatars/4.png" alt="Avatar"
                                                            class="rounded-circle" />
                                                    </li>
                                                </ul>
                                            </td>
                                            <td><span class="badge bg-label-primary me-1">Active</span></td>
                                            <td><span class="badge bg-label-primary me-1">Active</span></td>

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