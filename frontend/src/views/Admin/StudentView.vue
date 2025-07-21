<script setup>
import Aside from '@/views/Admin/include/AsideView.vue';
import HeaderView from './include/HeaderView.vue';
import Footer from '@/views/Admin/include/FooterView.vue';
import { onMounted, ref, computed } from 'vue';
import { useStudentStore } from '@/stores/admin/student';

const studentStore = useStudentStore();
onMounted(() => {
    studentStore.fetchStudent();
})
function goToPage(page) {
    if (page >= 1 && page <= studentStore.lastPage) {
        studentStore.fetchStudent(page);
    }
}

const paginationPages = computed(() => {
    const pages = [];
    const total = studentStore.lastPage;
    const current = studentStore.currentPage;

    if (total <= 5) {
        for (let i = 1; i <= total; i++) pages.push(i);
    } else {
        if (current <= 3) {
            pages.push(1, 2, 3, '...', total);
        } else if (current >= total - 2) {
            pages.push(1, '...', total - 2, total - 1, total);
        } else {
            pages.push(1, '...', current, '...', total);
        }
    }

    return pages;
});

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
                            <h5 class="card-header">Students List</h5>
                            <div class="table-responsive text-nowrap">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>SL.</th>
                                            <th>Student Name</th>
                                            <th>Phone</th>
                                            <th>Email</th>
                                            <th>Address</th>

                                        </tr>
                                    </thead>
                                    <tbody class="table-border-bottom-0">
                                        <tr v-for="(student, index) in studentStore.students" :key="student.id">
                                            <td>{{ index + 1 + (studentStore.currentPage - 1) * 20 }}</td>
                                            <td>{{ student.name }}</td>
                                            <td>{{ student.phone }}</td>
                                            <td><span class="badge bg-label-success me-1">Active</span></td>
                                            <td><span class="badge bg-label-info me-1">{{ student.email }}</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="m-3 d-flex justify-content-between align-items-center flex-wrap">
                                    <div class="mb-2">
                                        Showing <strong>{{ studentStore.students.length }}</strong> of <strong>{{
                                            studentStore.total }}</strong> students
                                    </div>

                                    <nav aria-label="Page navigation">
                                        <ul class="pagination pagination-sm mb-0">
                                            <!-- Prev -->
                                            <li class="page-item" :class="{ disabled: studentStore.currentPage === 1 }">
                                                <a class="page-link" href="javascript:void(0);"
                                                    @click="goToPage(studentStore.currentPage - 1)">
                                                    <i class="bx bx-chevron-left"></i>
                                                </a>
                                            </li>

                                            <!-- Pages -->
                                            <li class="page-item" v-for="page in paginationPages" :key="page"
                                                :class="{ active: page === studentStore.currentPage, disabled: page === '...' }">
                                                <a class="page-link" v-if="page !== '...'" href="javascript:void(0);"
                                                    @click="goToPage(page)">
                                                    {{ page }}
                                                </a>
                                                <span class="page-link" v-else>…</span>
                                            </li>

                                            <!-- Next -->
                                            <li class="page-item"
                                                :class="{ disabled: studentStore.currentPage === studentStore.lastPage }">
                                                <a class="page-link" href="javascript:void(0);"
                                                    @click="goToPage(studentStore.currentPage + 1)">
                                                    <i class="bx bx-chevron-right"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>



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