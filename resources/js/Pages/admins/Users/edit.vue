<template>
    <!-- Main modal -->
    <div class="container px-5 py-24 mx-auto flex">
        <div class="lg:w-4/6 mx-auto">
            <div
                class="flex-col justify-center sm:flex-row mt-10 bg-white rounded-2xl"
            >
                <div class="text-center sm:pr-8 sm:py-8">
                    <form class="p-4 md:p-5" @submit.prevent="submit">
                        <div class="flex flex-col justify-center mb-4">
                            <div class="shrink-0 mb-6 justify-center flex">
                                <img
                                    class="h-20 w-20 bg-slate-300 object-cover rounded-full"
                                    src=""
                                    alt=""
                                />
                            </div>

                            <label
                                class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                for="file_input"
                                >Upload Photo</label
                            >
                            <input
                                class="mb-2 w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                                id="file_input"
                                type="file"
                                @input="form.image = $event.target.files[0]"
                            />
                        </div>
                        <div class="grid gap-4 mb-4 grid-cols-2">
                            <div class="col-span-2">
                                <label
                                    for="id"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >User Id</label
                                >
                                <input
                                    type="number"
                                    name="id"
                                    id="id"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type User ID"
                                    required=""
                                    disabled
                                    readonly
                                    v-model="form.id"
                                />
                            </div>
                            <div class="col-span-2">
                                <label
                                    for="name"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Name</label
                                >
                                <input
                                    v-model="form.name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type User Name"
                                    required=""
                                />
                            </div>
                            <div class="col-span-2">
                                <label
                                    for="Email"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Email</label
                                >
                                <input
                                    v-model="form.email"
                                    type="text"
                                    name="Email"
                                    id="Email"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Type Email"
                                    required=""
                                />
                            </div>

                            <div class="col-span-2">
                                <label
                                    for="language"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >Language</label
                                >
                                <input
                                    v-model="form.language"
                                    type="text"
                                    name="language"
                                    id="language"
                                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                    placeholder="Language"
                                />
                            </div>
                            <div class="col-span-2">
                                <label
                                    for="description"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Description</label
                                >
                                <textarea
                                    v-model="form.description"
                                    id="description"
                                    rows="4"
                                    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="Write product description here"
                                ></textarea>
                            </div>
                        </div>

                        <div class="flex justify-center">
                            <!-- <DisableButton />
                            <BanButton /> -->
                            <!-- <button
                            type="submit"
                            class="text-white inline-flex mt-6 w-full items-center bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
                        >
                            <svg
                                class="me-1 -ms-1 w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            save
                        </button> -->
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Head, Link, useForm } from "@inertiajs/vue3";
import AdminsLayout from "@/Layouts/AdminsLayout.vue";
defineOptions({ layout: AdminsLayout });
const props = defineProps({ user: Object });

const form = useForm({
    id: props.user.id,
    name: props.user.name,
    email: props.user.email,
    // password:props.user.password,
    // role: "",
    description: props.user.description,
    image: "",
    language: props.user.language,
});
// const submit = () => {
//     form.put(route("admins.users.update"), {

//         onSuccess: () => Swal.fire("Updated successfully", "", "success"),
//     });
// };
</script>

<style lang="scss" scoped></style>
