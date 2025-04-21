import { PoolClient } from "pg";
import pool from "../db/db";
import IStudent from "../interfaces/IStudent";
import Student from "../models/Student";

export default class StudentRepository {
  // Get all students
  static async getAll(): Promise<Student[]> {
    const result = await pool.query("SELECT * FROM students");
    return result.rows.map(
      (row) =>
        new Student(row.id, row.name, row.age, row.course, row.department)
    );
  }

  // Create a new student
  static async create(student: IStudent): Promise<Student> {
    const { name, age, course, department } = student;
    const result = await pool.query(
      "INSERT INTO students (name, age, course, department) VALUES ($1, $2, $3, $4) RETURNING *",
      [name, age, course, department]
    );
    const row = result.rows[0];
    return new Student(row.id, row.name, row.age, row.course, row.department);
  }
}
