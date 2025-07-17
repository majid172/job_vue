import {ref} from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
export const useTeacherStore = defineStore('teacher',()=>{
    const teachers = ref('');
    async function fetchTeacher() {
    try {
      const {data} = await axios.get('admin/teachers-list');
      
      teachers.value = data.teachers;
    } catch (error) {
      console.error('Error fetching fetchTeacher:', error);
    }
  }
    return {
    teachers,
    fetchTeacher
    
  };
})