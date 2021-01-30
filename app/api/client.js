import { create } from "apisauce"; 

const apiClient = create({
    baseURL: "https://trefle.io/api/v1/plants?token=bw1FHQLQmeReBey9ABDvfOPEEPqI7KYHnP2HnkhTq6k&filter_not[common_name,%20image_url]=null"
})

export default apiClient;