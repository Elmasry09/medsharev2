<template>
    <nav
        class="flex mb-4 dark:bg-gray-800 dark:text-white"
        aria-label="Breadcrumb"
    >
        <ol
            class="inline-flex items-center space-x-1 md:space-x-3 rtl:space-x-reverse"
        >
            <li class="inline-flex items-center">
                <Link
                    href="#"
                    class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                    <svg
                        class="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path
                            d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"
                        />
                    </svg>
                    Home
                </Link>
            </li>
            <li>
                <div class="flex items-center dark:bg-gray-800 dark:text-white">
                    <svg
                        class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <a
                        href="#"
                        class="ms-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                        >Dashboard</a
                    >
                </div>
            </li>
            <li aria-current="page">
                <div class="flex items-center">
                    <svg
                        class="w-3 h-3 text-gray-400 mx-1 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span
                        class="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400"
                        >Analytics</span
                    >
                </div>
            </li>
        </ol>
    </nav>
    <h2
        class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white"
    >
        Analytics
    </h2>
    <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700" />
    <DonationsReceived class="m-6" />
    <div class="grid md:grid-cols-3 gap-6">
        <div class="md:col-span-2">
            <CharityCharts class="my-20 bg-white rounded-xl p-4" />
        </div>
        <div class="md:col-span-1 mt-20">
            <ActiveAreas />
        </div>
    </div>

    <ManagementTable :donations="donations" />
    <DonationRequests  :donations = "donationRequests" />
</template>

<script setup>
import charitiesLayout from "@/Layouts/charitesLayout.vue";
defineOptions({ layout: charitiesLayout });
import { Link } from "@inertiajs/vue3";
import CharityCharts from "@/Components/CharityCharts.vue";
import ActiveAreas from "@/Components/ActiveAreas.vue";
import DonationsReceivedTable from "@/Components/DonationsReceivedTable.vue";
import DonationsReceived from "@/Components/DonationsReceived.vue";
import ManagementTable from "@/Components/ManagementTable.vue";
import DonationRequests from "@/Components/DonationRequests.vue";
defineProps({
    donations: Object,
    donationRequests: Object
});

</script>

<style lang="scss" scoped></style>
