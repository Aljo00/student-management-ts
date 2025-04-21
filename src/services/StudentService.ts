import IStudent from "../interfaces/IStudent";
import StudentRepository from "../repositories/StudentRepository";

export default class StudentService {
  static async getAllStudents() {
    return await StudentRepository.getAll();
  }

  static async createStudent(student: IStudent) {
    return await StudentRepository.create(student);
  }
}
