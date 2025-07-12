<template>
    <aside id="layout-menu" class="layout-menu menu-vertical menu bg-menu-theme">
        <!-- Logo -->
        <div class="app-brand demo">
            <a href="index.html" class="app-brand-link">
                <span class="app-brand-logo demo">
                    <span class="text-primary"></span>
                </span>
                <span class="app-brand-text demo menu-text fw-bold ms-2">Sneat</span>
            </a>
            <a href="javascript:void(0);" class="layout-menu-toggle menu-link text-large ms-auto">
                <i class="bx bx-chevron-left d-block d-xl-none align-middle"></i>
            </a>
        </div>

        <div class="menu-divider mt-0"></div>
        <div class="menu-inner-shadow"></div>

        <ul class="menu-inner py-1">
            <!-- Dashboards -->
            <li class="menu-item active open">
                <a href="javascript:void(0);" class="menu-link menu-toggle">
                    <i class="menu-icon tf-icons bx bx-home-smile"></i>
                    <div class="text-truncate">Dashboards</div>
                    <span class="badge rounded-pill bg-danger ms-auto">5</span>
                </a>
            </li>

            <!-- Header -->
            <li class="menu-header small text-uppercase">
                <span class="menu-header-text">Components</span>
            </li>

            <!-- Links -->
            <li class="menu-item">
                <router-link :to="{ name: 'admin.students' }" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-collection"></i>
                    <div class="text-truncate">All Students</div>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{ name: 'admin.teacher' }" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-collection"></i>
                    <div class="text-truncate">Teachers</div>
                </router-link>
            </li>
            <li class="menu-item">
                <router-link :to="{ name: 'admin.news_notice' }" class="menu-link">
                    <i class="menu-icon tf-icons bx bx-collection"></i>
                    <div class="text-truncate">News & Notice</div>
                </router-link>
            </li>

            <!-- Categories Dropdown -->
            <li class="menu-item" :class="{ open: openCategory }">
                <a href="javascript:void(0)" class="menu-link menu-toggle" @click="toggleDropdown('category')">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate">Categories</div>
                </a>
                <ul v-show="openCategory" class="menu-sub">
                    <li class="menu-item">
                        <a href="ui-accordion.html" class="menu-link">
                            <div class="text-truncate">Category List</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Sub-Category List</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Subject</div>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- Enrollments Dropdown -->
            <li class="menu-item" :class="{ open: openEnrollment }">
                <a href="javascript:void(0)" class="menu-link menu-toggle" @click="toggleDropdown('enrollment')">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate">Enrollments</div>
                </a>
                <ul v-show="openEnrollment" class="menu-sub">
                    <li class="menu-item">
                        <a href="ui-accordion.html" class="menu-link">
                            <div class="text-truncate">Category Enrollments</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Manual Enrollments</div>
                        </a>
                    </li>
                </ul>
            </li>

            <!-- Books & Orders Dropdown -->
            <li class="menu-item" :class="{ open: openBooksOrders }">
                <a href="javascript:void(0)" class="menu-link menu-toggle" @click="toggleDropdown('booksOrders')">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate">Books & Orders</div>
                </a>
                <ul v-show="openBooksOrders" class="menu-sub">
                    <li class="menu-item">
                        <a href="ui-accordion.html" class="menu-link">
                            <div class="text-truncate">Books</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Orders</div>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item" :class="{ open: openExamsOrders }">
                <a href="javascript:void(0)" class="menu-link menu-toggle" @click="toggleDropdown('exams')">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate">Exams</div>
                </a>
                <ul v-show="openExamsOrders" class="menu-sub">
                    <li class="menu-item">
                        <a href="ui-accordion.html" class="menu-link">
                            <div class="text-truncate">Add New Exam</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Permanent Exams</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Temporary Exams</div>
                        </a>
                    </li>
                </ul>
            </li>

            <li class="menu-item" :class="{ open: openResults }">
                <a href="javascript:void(0)" class="menu-link menu-toggle" @click="toggleDropdown('results')">
                    <i class="menu-icon tf-icons bx bx-box"></i>
                    <div class="text-truncate">Results</div>
                </a>
                <ul v-show="openResults" class="menu-sub">
                    <li class="menu-item">
                        <a href="ui-accordion.html" class="menu-link">
                            <div class="text-truncate">MCQ Results</div>
                        </a>
                    </li>
                    <li class="menu-item">
                        <a href="ui-alerts.html" class="menu-link">
                            <div class="text-truncate">Written Exams</div>
                        </a>
                    </li>
                </ul>
            </li>
        </ul>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

// Dropdown states
const openCategory = ref(false)
const openEnrollment = ref(false)
const openBooksOrders = ref(false)
const openExamsOrders = ref(false)
const openResults = ref(false)

const toggleDropdown = (dropdown) => {
    switch (dropdown) {
        case 'category':
            openCategory.value = !openCategory.value
            break
        case 'enrollment':
            openEnrollment.value = !openEnrollment.value
            break
        case 'booksOrders':
            openBooksOrders.value = !openBooksOrders.value
            break
        case 'exams':
            openExamsOrders.value = !openExamsOrders.value
            break
        case 'results':
            openResults.value = !openResults.value
            break
        default:
            break
    }
}
</script>

<style scoped>
.menu-sub {
    display: none;
    padding-left: 20px;
    transition: all 0.3s ease;
}

.menu-item.open>.menu-sub {
    display: block
}
</style>