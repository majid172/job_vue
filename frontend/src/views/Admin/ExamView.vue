<template>
    <div class="wrapper">
        <Aside />
        <div class="main">

            <HeaderView />
            <main class="content">
                <div class="container-fluid p-0">

                    <div class="card">
                        <div class="card-header">
                            <h5 class="card-title mb-0">Exam List</h5>
                        </div>
                        <div class="card-body">
                            
                            <!-- <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Fullname</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Job Title</th>
                                        <th scope="col">Active</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Jacob</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>

                                </tbody>
                            </table> -->
                        </div>
                    </div>
                </div>
            </main>

            <Footer />
        </div>

    </div>

</template>
<script setup>
import Aside from '@/views/Admin/include/AsideView.vue';
import HeaderView from './include/HeaderView.vue';
import Footer from '@/views/Admin/include/FooterView.vue'

</script>