<template>
    <charitesLayout>
        <nav class="flex mb-4" aria-label="Breadcrumb">
            <ol class="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse">
                <li class="inline-flex items-center">
                    <a href="#"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 me-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20">
                            <path
                                d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                        </svg>
                        Home
                    </a>
                </li>
                <li>
                    <div class="flex items-center">
                        <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="ms-1 text-sm font-medium text-slate-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Donations</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="ms-1 text-sm font-medium text-slate-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Donation
                            Management</a>

                    </div>
                </li>
                <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="m1 9 4-4-4-4" />
                        </svg>
                        <a href="#"
                            class="ms-1 text-sm font-medium text-slate-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white">Donation
                            Profile</a>
                    </div>
                </li>

            </ol>
        </nav>
        <h2 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">
            Donation Profile</h2>
        <hr class="h-px my-6 bg-gray-300 border-0 dark:bg-gray-700">
        <section class="text-gray-200    body-font">
            <div class="container px-5 py-24 mx-auto flex flex-col">
                <div class="lg:w-4/6 mx-auto">
                    <div v-if="props.donation.image" id="gallery" class="relative w-full" data-carousel="slide">
                        <div class="relative h-44 overflow-hidden rounded-xl md:h-96">
                            <!-- Item 1 -->
                            <div class="hidden duration-1000 ease-in-out" data-carousel-item>
                                <img :src="props.donation.image"
                                    class="absolute block max-w-full h-auto -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                                    alt="image" />

                            </div>
                        </div>

                    </div>

                    <div class=" justify-center mt-10 rounded-2xl bg-white  ">
                        <div class="text-center sm:pr-8 sm:py-8">
                            <form class="p-4 md:p-5" @submit.prevent="submit">
                                <div
                                    class="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                                    <img class="w-20 h-20 rounded-full"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfhk7r0ysYUeoklEp9XpCCCvf346u8U2dBow&s "
                                        alt="user photo" />
                                </div>


                                <a href="https://www.google.com/maps"
                                    class="flex items-center text-center justify-center mb-10">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 my-2" fill="#075985"
                                        viewBox="0 0 384 512">
                                        <path
                                            d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                                    </svg>
                                    <h2 class="font-medium title-font mx-4 text-cyan-900 text-lg">
                                        View Location
                                    </h2>
                                </a>


                                <div class="grid gap-4 mb-4 grid-cols-2">

                                    <div class="col-span-2">
                                        <label for="name"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                                        <input type="text" :value="donation.user.name" name="name" id="name"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type Donator Name" required="">
                                    </div>
                                    <div class="col-span-2">
                                        <label for="Email"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input type="text" :value="donation.user.email" name="Email" id="Email"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="Type Email" required="">
                                    </div>
                                    <div class="col-span-2 ">
                                        <label for="address"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Address</label>
                                        <input type="text" :value="donation.address.address" name="address" id="address"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                            placeholder="area" required="">
                                    </div>
                                    <div class="col-span-2">
                                        <label for="role"
                                            class="block mb-2 text-sm text-center font-medium text-gray-900 dark:text-white">Status</label>
                                        <select id="role" v-model="form.state"
                                            class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-primary-500 w-full focus:border-primary-500 block  p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                                            <option selected disabled>Select Status</option>
                                            <option value="pending">Pending</option>
                                            <option value="approved">Approved</option>
                                            <option value="accepted">Accepted</option>

                                        </select>
                                        <InputError class="mt-2" :message="form.errors.state" />
                                    </div>

                                    <div class="col-span-2">
                                        <label for="description"
                                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Description</label>
                                        <textarea id="description" rows="4" :value="donation.description"
                                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Write product description here">

                                        </textarea>
                                    </div>
                                </div>
                                <button type="submit"
                                    class="text-white inline-flex w-full  items-center bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                                    <svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                                            clip-rule="evenodd"></path>
                                    </svg>
                                    Update
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </charitesLayout>
</template>

<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import charitesLayout from "@/Layouts/charitesLayout.vue";
import InputError from "@/Components/InputError.vue";
import { Head, Link, useForm } from '@inertiajs/vue3';

// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
});

const props = defineProps({
    donation: Object,
});

const form = useForm({
    state: String(props.donation.state),
});
const submit = () => {
    form.patch(route("charits.CharityDonation.update", { donation: props.donation.id }), {
        onFinish: () => Swal.fire("Updated successfully", "", "success"),
    });
};
</script>

<style lang="scss" scoped></style>
