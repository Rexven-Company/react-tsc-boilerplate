import { AxiosResponse } from "axios";
import httpClient from "../utils/httpClient";

class CourseService {
  responseBody = (response: AxiosResponse) => response.data;

  //check Auth. of User
  public async getCourses() {
    const { data } = await httpClient.get(`/api/v1/courses`)
    return data
  }


  public async getCourse(id: string) {
    const { data } = await httpClient.get(`api/v1/courses/${id}`)
    return data
  }

  public async getUserProgress(id: string) {
    const { data } = await httpClient.get(`api/v1/user-courses/${id}`)
    return data
  }

  public async updateUserProgress(updateUserProgressData: { courseId: number, contentId: number }) {
    const { data } = await httpClient.patch(`api/v1/user-courses/${updateUserProgressData.courseId}`, updateUserProgressData)
    return data
  }

  public async discardUserProgress(updateUserProgressData: { courseId: number, contentId: number }) {
    const { data } = await httpClient.patch(`api/v1/user-courses/${updateUserProgressData.courseId}/discard`, updateUserProgressData)
    return data
  }
}

export default new CourseService();
