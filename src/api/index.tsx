import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
});

export const insertMovie = (payload: any) => api.post(`/movie`, payload);
export const getAllMovies = () => api.get(`movies`);
export const updateMovieById = (id: any, payload: any) =>
  api.put(`/movie/${id}`, payload);
export const deleteMovieById = (id: any) => api.delete(`/movie/${id}`);
export const getMovieById = (id: any) => api.get(`/movie/${id}`);

const apis = {
  insertMovie,
  getAllMovies,
  updateMovieById,
  deleteMovieById,
  getMovieById,
};

export default apis;
