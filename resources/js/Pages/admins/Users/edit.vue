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
                                        for="email"
                                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >Password</label
                                    >
                                    <input
                                        v-model="form.password"
                                        type="password"
                                        name="password"
                                        id="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                        placeholder="Password"
                                        required
                                    />
                                                        <InputError class="mt-2" :message="form.errors.password" />

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
                                    required=""
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
                            <DisableButton />
                            <BanButton />
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
import DisableButton from "@/Components/DisableButton.vue";
import BanButton from "@/Components/BanButton.vue";
defineProps({ users: Object })

const form = useForm({
    name: "",
    email: "",
    password:"",
    // role: "",
    description: "",
    image: "",
    language: "",
});
const submit = () => {
    form.post(route("admins.users.update"), {
        onFinish: () => Swal.fire("Updated successfully", "", "success"),
    });
};
// const form = useForm(`EditUser:${user.id}`, data)

</script>

<style lang="scss" scoped></style>
