import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useStudentStore = defineStore('student', () => {
  const students = ref([]);
  const currentPage = ref(1);
  const lastPage = ref(1);
  const total = ref(0);

  async function fetchStudent(page = 1) {
    try {
      const { data } = await axios.get(`/admin/students-list?page=${page}`);

      students.value = data.data.data; // Laravel returns `data`, not `data.data`
      currentPage.value = data.data.current_page;
      lastPage.value = data.data.last_page;
      total.value = data.data.total;

    } catch (error) {
      console.error('Error fetching students:', error);
    }
  }

  return {
    students,
    currentPage,
    lastPage,
    total,
    fetchStudent
  };
});
