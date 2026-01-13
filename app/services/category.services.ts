import { fetchAPI } from "../lib/api";
import { category } from "../types";

export const getAllCategories = async(): Promise<category[]> => {
    return await fetchAPI<category[]>("/categories");
}